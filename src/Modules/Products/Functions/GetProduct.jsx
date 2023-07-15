import { routeLoader$ } from '@builder.io/qwik-city'
import { getFromCacheOrApi } from 'Base'
import { useLayout } from 'Contents'

const validPaths = [
    '/product/slug',
]

const getProduct = routeLoader$(async ({
    params,
    query,
}) => {
    const { slug } = params || {}
    const data = await getFromCacheOrApi(`/product/get?slug=${slug}`)
    const layout = await useLayout('product', query)

    return {
        ...data,
        ...layout,
    }
})

export default getProduct
