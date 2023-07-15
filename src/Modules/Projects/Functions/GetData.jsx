import { routeLoader$ } from '@builder.io/qwik-city'
import { getFromCacheOrApi } from 'Base'
import { useLayout } from 'Contents'

const validPaths = [
    '/projects',
    '/projects/',
    '/projects/2',
    '/projects/2/',
    '/projects/category|tag|search/value',
    '/projects/category|tag|search/value/',
    '/projects/category|tag|search/value/2',
    '/projects/category|tag|search/value/2/'
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

    var url = '/projects/data?'

    let matches = /\/projects(\/\d+)?\/?$/.exec(pathname)

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

            if (pathname.startsWith(`/projects/${segment}`)) {
                matches = new RegExp(`(?<=\\/projects\\/${segment}\\/)[^/]+\\/?(\\d+)?\\/?$`).exec(pathname)
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
    const layout = await useLayout('projects', query)

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
