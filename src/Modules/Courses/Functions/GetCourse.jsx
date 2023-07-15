import { routeLoader$ } from '@builder.io/qwik-city'
import { getFromCacheOrApi } from 'Base'
import { useLayout } from 'Contents'

const validPaths = [
    '/instructor/slug',
    '/instructor/slug/',
]

const getCourse = routeLoader$(async ({
    params,
    query,
    url,
}) => {

    const { slug } = params || {}

    var url = `/course/get?slug=${slug}`

    const course = await getFromCacheOrApi(url)
    const layout = await useLayout('course', query)

    return {
        ...course,
        ...layout,
    }
})

export default getCourse
