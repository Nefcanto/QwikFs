import { routeLoader$ } from '@builder.io/qwik-city'
import { getFromCacheOrApi } from 'Base'
import { useLayout } from 'Contents'
import {useGlobalization} from 'Globalization'

const validPaths = [
    '/vlogPost/slug',
]

const getPost = routeLoader$(async ({
    params,
    query,
}) => {
    const { slug } = params || {}
    const data = await getFromCacheOrApi(`/vlogPost/get?slug=${slug}`)
    const layout = await useLayout('vlog', query)
    const globalization = await useGlobalization(query)
    return {
        ...data,
        ...layout,
        ...globalization
    }
})

export default getPost
