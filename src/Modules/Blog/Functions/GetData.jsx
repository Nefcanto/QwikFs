import { routeLoader$ } from '@builder.io/qwik-city'
import {
    getFromCacheOrApi,
    useAsyncRequests
} from 'Base'
import { useLayout } from 'Contents'

const validPaths = [
    '/blog',
    '/blog/',
    '/blog/2',
    '/blog/2/',
    '/blog/tag|category|author|search/slug',
    '/blog/tag|category|author|search/slug/',
    '/blog/tag|category|author|search/slug/2',
    '/blog/tag|category|author|search/slug/2/'
]

const getData = routeLoader$(async ({
    abort,
    cookie,
    next,
    params,
    platform,
    query,
    request,
    response,
    url,
}) => {

    const { slug, pageNumber } = params || {}

    const { pathname } = url

    var url = '/blog/data?'

    let matches = /\/blog(\/\d+)?\/?$/.exec(pathname)

    if (matches != null) {
        const pageNumber = matches[1]
        if (pageNumber !== undefined) {
            url += `&pageNumber=${pageNumber.replace('/', '')}`
        }
    }
    else {

        const secondSegments = ['category', 'tag', 'author', 'search']

        if (pathname.split('/').length >= 2 && !secondSegments.includes(pathname.split('/')[2])) {
            response.status = 404
            return
        }

        for (let i = 0; i < secondSegments.length; i++) {
            const segment = secondSegments[i]

            if (pathname.startsWith(`/blog/${segment}`)) {
                matches = new RegExp(`(?<=\\/blog\\/${segment}\\/)[^/]+\\/?(\\d+)?\\/?$`).exec(pathname)
                if (matches == null) {
                    response.status = 404
                    return
                }
                else {
                    url += `&${segment}=${encodeURI(matches[0].split('/')[0])}`
                    const pageNumber = matches[1]
                    if (pageNumber !== undefined) {
                        url += `&pageNumber=${pageNumber}`
                    }
                    break
                }
            }
        }
    }

    url = url.replace('?&', '?')

    const [
        data,
        layout,
    ] = await useAsyncRequests([
        getFromCacheOrApi(url),
        useLayout('blog', query),
    ])
    // console.log(params, response.status)
    // if (pageNumber && isNaN(pageNumber)) {
    //     console.log(pageNumber, isNaN(pageNumber))
    //     response.status = 400
    //     return
    // }

    return {
        ...data,
        ...layout,
    }
})

export { getData }
