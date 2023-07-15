import { routeLoader$ } from '@builder.io/qwik-city'
import { getFromCacheOrApi } from 'Base'
import { useLayout } from 'Contents'

const validPaths = [
    '/project/slug',
]

const getProject = routeLoader$(async ({
    params,
    query,
}) => {
    const { slug } = params || {}
    const data = await getFromCacheOrApi(`/project/data?slug=${slug}`)
    const layout = await useLayout('project', query)

    return {
        ...data,
        ...layout,
    }
})

export default getProject
