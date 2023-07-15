import { routeLoader$ } from '@builder.io/qwik-city'
import {
    getFromCacheOrApi,
    useAsyncRequests
} from 'Base'
import { useLayout } from 'Contents'
import { useGlobalization } from 'Globalization'
import { useForm } from 'Forms'

const validPaths = [
    '/question/slug',
]

const getQuestion = routeLoader$(async ({
    params,
    query,
}) => {
    const { slug } = params || {}

    const [
        data,
        layout,
        globalization,
        form,
    ] = await useAsyncRequests([
        getFromCacheOrApi(`/question/get?slug=${slug}`),
        useLayout('questions', query),
        useGlobalization(query),
        useForm(`questionComment`,query)
    ])
    return {
        ...data,
        ...layout,
        ...globalization,
        ...form,
    }
})

export default getQuestion
