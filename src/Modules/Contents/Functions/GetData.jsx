import { routeLoader$ } from '@builder.io/qwik-city'
import { getFromCacheOrApi } from 'Base'
import { useLayout } from 'Contents'

const validPaths = [
    '/page/slug',
    '/page/slug/',
]

const getData = routeLoader$(async ({
    fail,
    params,
    query,
    ...rest
}) => {
    const { slug } = params || {}
    const regex = /^(\/[^\/]*)?\/page\/([^/\?]+)\/?$/
    let data = await getFromCacheOrApi(`/page/get?slug=${slug}&locale=null`)
    const sections = await useLayout('page', query)
    if (data.error?.code === "404") {
        return fail(404, data)
    }
    if (data.statusCode) {
        return fail(data.statusCode, data)
    }
    data = { ...data, ...sections }
    return data
})

export default getData
