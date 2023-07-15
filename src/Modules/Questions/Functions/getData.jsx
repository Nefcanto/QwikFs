import { routeLoader$ } from '@builder.io/qwik-city'
import { getFromCacheOrApi } from 'Base'
import { useLayout } from 'Contents'
import { useGlobalization } from 'Globalization'
import { useAsyncRequests } from 'Base'

const validPaths = [
    '/questions',
    '/questions/',
    '/questions/2',
    '/questions/2/',
    '/questions/tag|category|author|search/slug',
    '/questions/tag|category|author|search/slug/',
    '/questions/tag|category|author|search/slug/2',
    '/questions/tag|category|author|search/slug/2/'
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

    var url = '/questions/data?'

    let matches = /\/questions(\/\d+)?\/?$/.exec(pathname)

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

            if (pathname.startsWith(`/questions/${segment}`)) {
                matches = new RegExp(`(?<=\\/questions\\/${segment}\\/)[^/]+\\/?(\\d+)?\\/?$`).exec(pathname)
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
        globalization
    ] = await useAsyncRequests([
        getFromCacheOrApi(url),
        useLayout('questions', query),
        useGlobalization(query)
    ])

    return {
        ...data,
        ...layout,
        ...globalization,
    }
})

export { getData }
