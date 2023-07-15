import { component$ } from '@builder.io/qwik'
import {
    QwikCityProvider,
    RouterOutlet,
    ServiceWorkerRegister,
} from '@builder.io/qwik-city'
import { RouterHead } from './router-head'
import 'tailwindcss/tailwind.css'
import Head from './routes/head'
import Favicon from './BaseComponents/Favicon'
import './global.css'
import { isDev } from 'Base'

export default component$(() => {

    const scriptContent = `const handlers = {}
    on = (name, fn) => {
        if (!handlers[name]) handlers[name] = [];
        handlers[name].push(fn);
    }

    trigger = (name, params) => {
        if (!handlers[name]) return false;
        handlers[name].forEach((fn) => fn.call(fn, params));
    }

    off = (name, fn) => {
        if (handlers[name]) {
            const index = handlers[name].indexOf(fn);
            if (index >= 0) handlers[name].splice(index, 1);
        }
    }`

    return <>
        <QwikCityProvider>
            <head>
                <meta charSet="utf-8" />
                {/* <link rel="manifest" href="/manifest.json" /> */}
                <RouterHead />
                <Head />
                <script dangerouslySetInnerHTML={scriptContent} />
                <Favicon />
               
            </head>
            <body>
                {
                    isDev() &&
                    <a
                        href="/clear-cache"
                        target="_blank"
                        class="fixed left-4 text-xs bottom-4 py-1 px-2 text-white bg-red-800  hover:bg-red-950 cursor-pointer transition-all rounded-full bg-opacity-50 text-opacity-50 z-50"
                    >
                        Clear cache
                    </a>
                }
                <RouterOutlet />
                <ServiceWorkerRegister />
            </body>
        </QwikCityProvider>
    </>
})
