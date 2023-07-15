import { routeLoader$ } from '@builder.io/qwik-city'
import { getFromCacheOrApi } from 'Base'
import { useLayout } from 'Contents'

const validPaths = [
    '/post/slug',
]

const getPost = routeLoader$(async ({
    params,
    query,
}) => {
    const { slug } = params || {}
    const data = await getFromCacheOrApi(`/blogPost/get?slug=${slug}`)
    const layout = await useLayout('blog', query)

    return {
        ...data,
        ...layout,
    }
})

export default getPost
