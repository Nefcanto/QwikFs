import { defineConfig } from 'vite'
import { qwikVite } from '@builder.io/qwik/optimizer'
import { qwikCity } from '@builder.io/qwik-city/vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import { partytownVite } from '@builder.io/partytown/utils'
import { join } from "path"
import path from 'path'
import {
    existsSync,
    readFileSync,
    writeFileSync,
} from 'fs'
import glob from 'glob'

let searchPath = './src/Modules/**/RichText.jsx'
let richTextComponentFiles = glob.sync(searchPath)
let richTextComponentsContent = ''
richTextComponentFiles.map(i => {
    const content = readFileSync(i).toString()
    const result = /export\s+default\s+(\w+)/.exec(content)
    if (result) {
        const componentName = result[1]
        const path = i.replace('./src', '.').replace('.jsx', '')
        richTextComponentsContent += `import ${componentName} from '${path}';\n`
        richTextComponentsContent += `export { ${componentName} };\n`
        richTextComponentsContent += `\n`
    }
})

writeFileSync('./src/RichTextComponents.jsx', richTextComponentsContent)

searchPath = './src/**/index.jsx'
let indexFiles = glob.sync(searchPath)
let barrels = []
indexFiles.map(i => {
    const content = readFileSync(i).toString()
    const result = new RegExp('from\\s*.?(\\w+Parts)', 'gm').exec(content)
    if (result) {
        const partsBarrel = result[1]
        if (!existsSync(`./src/Components/${partsBarrel}`)) {
            barrels.push(partsBarrel)
        }
    }
})
console.log(`These layouts are default layouts:`)
console.log(barrels)

export default defineConfig(() => {
    return {
        plugins: [
            qwikCity({
                trailingSlash: false
            }),
            qwikVite(),
            tsconfigPaths(),
            partytownVite({ dest: join(__dirname, "dist", "~partytown") }),
        ],
        preview: {
            headers: {
                'Cache-Control': 'public, max-age=600',
            },
        },
        server: {
            host: "0.0.0.0",
            hmr: {
                clientPort: 443,
            },
        },
        build: {
            rollupOptions: {
                external: [
                    ...barrels
                ]
            }
        },
        optimizeDeps: {
            include: ["@auth/core"]
        }
    }
})
