import path, { dirname } from 'path'
import {
    existsSync,
    mkdirSync,
    readdirSync,
    readFileSync,
    unlinkSync,
    writeFileSync,
} from 'fs'
import crypto from 'crypto'
import { get } from 'Base'

// const __filename = url.fileURLToPath(import.meta.url)
// const __dirname = url.fileURLToPath(new URL('.', import.meta.url))

const getCacheDirectory = () => {
    const currentDirectory = path.resolve('/Temp')
    const cacheDirectory = path.join(currentDirectory.split('src')[0], 'cache')
    return cacheDirectory
}

const getFromCacheOrApi = async (url) => {
    const start = new Date()
    const cacheDirectory = getCacheDirectory()
    let fileName = url
    fileName = fileName.replace(/\//ig, '_')
    fileName = crypto.createHash('md5').update(encodeURI(fileName)).digest('hex')
    const cacheFilePath = path.join(cacheDirectory, fileName)
    if (existsSync(cacheFilePath)) {
        console.log(`Getting ${url} from cache ...`)
        const data = readFileSync(cacheFilePath).toString()
        const end = new Date()
        console.log(`Took ${end - start} milliseconds`)
        return JSON.parse(data)
    }

    console.log(`Getting ${url} from API ...`)
    const data = await get(url)
    const { statusCode } = data || {}
    if (!data || statusCode) {
        console.log(`Not caching because server returned ${statusCode}\n${JSON.stringify(data)}`)
        return data
    }
    if (!existsSync(cacheDirectory)) {
        mkdirSync(cacheDirectory)
    }
    writeFileSync(cacheFilePath, JSON.stringify(data))
    const end = new Date()
    console.log(`Took ${end - start} milliseconds`)
    return data
}

const clearCache = () => {
    console.log('Clearing cache ...')
    const cacheDirectory = getCacheDirectory()
    if (existsSync(cacheDirectory)) {
        const files = readdirSync(cacheDirectory)
        for (let i = 0; i < files.length; i++) {
            const file = path.join(cacheDirectory, files[i])
            unlinkSync(file)
            console.log(`Removed ${file}`)
        }
    }
    console.log('Cleared the cache')
}

export { getFromCacheOrApi }
export { clearCache }
