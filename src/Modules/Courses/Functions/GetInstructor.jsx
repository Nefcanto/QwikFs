import { routeLoader$ } from '@builder.io/qwik-city'
import { getFromCacheOrApi } from 'Base'

const validPaths = [
    '/instructor/slug',
    '/instructor/slug/',
    '/instructor/slug/2',
    '/instructor/slug/2/',
]

const getInstructor = routeLoader$(async ({
    abort,
    cookie,
    next,
    params,
    platform,
    request,
    response,
    url,
}) => {

    const { slug, pageNumber } = params || {}

    const { pathname } = url

    var url = `/instructor/get?slug=${slug}`

    const data = await getFromCacheOrApi(url)

    const { seo } = data

    return data
})

export default getInstructor
