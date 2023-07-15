import { routeLoader$ } from '@builder.io/qwik-city'
import { getFromCacheOrApi } from 'Base'
import { useLayout } from 'Contents'
import {useGlobalization} from 'Globalization'

const validPaths = [
    '/vlog',
    '/vlog/',
    '/vlog/2',
    '/vlog/2/',
    '/vlog/tag|category|author|search/slug',
    '/vlog/tag|category|author|search/slug/',
    '/vlog/tag|category|author|search/slug/2',
    '/vlog/tag|category|author|search/slug/2/'
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

    var url = '/vlog/data?'

    let matches = /\/vlog(\/\d+)?\/?$/.exec(pathname)

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

            if (pathname.startsWith(`/vlog/${segment}`)) {
                matches = new RegExp(`(?<=\\/vlog\\/${segment}\\/)[^/]+\\/?(\\d+)?\\/?$`).exec(pathname)
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
    const layout = await useLayout('vlog', query)    
    const globalization = await useGlobalization(query)

    return {
        ...data,
        ...layout,
        ...globalization,
    }
})

export { getData }
