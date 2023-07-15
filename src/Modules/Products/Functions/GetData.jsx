import { routeLoader$ } from '@builder.io/qwik-city'
import { getFromCacheOrApi } from 'Base'
import { useLayout } from 'Contents'

const validPaths = [
    '/products',
    '/products/',
    '/products/2',
    '/products/2/',
    '/products/category|tag|search/value',
    '/products/category|tag|search/value/',
    '/products/category|tag|search/value/2',
    '/products/category|tag|search/value/2/'
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

    var url = '/products/data?'

    let matches = /\/products(\/\d+)?\/?$/.exec(pathname)

    if (matches != null) {
        const pageNumber = matches[1]
        if (pageNumber !== undefined) {
            url += `&pageNumber=${pageNumber.replace('/', '')}`
        }
    }
    else {

        const secondSegments = ['category', 'tag', 'search']

        if (pathname.split('/').length >= 2 && !secondSegments.includes(pathname.split('/')[2])) {
            response.status = 404
            return
        }

        for (let i = 0; i < secondSegments.length; i++) {
            const segment = secondSegments[i]

            if (pathname.startsWith(`/products/${segment}`)) {
                matches = new RegExp(`(?<=\\/products\\/${segment}\\/)[^/]+\\/?(\\d+)?\\/?$`).exec(pathname)
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

    const data = await getFromCacheOrApi(url)
    const layout = await useLayout('products', query)

    // console.log(params, response.status)
    // if (pageNumber && isNaN(pageNumber)) {
    //     console.log(pageNumber, isNaN(pageNumber))
    //     response.status = 400
    //     return
    // }

    const { seo } = data

    return {
        ...data,
        ...layout,
    }
})

export { getData }
