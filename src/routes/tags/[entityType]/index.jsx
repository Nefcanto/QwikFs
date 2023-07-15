import { component$ } from '@builder.io/qwik'
import { routeLoader$ } from '@builder.io/qwik-city'
import { getFromCacheOrApi } from 'Base'
import {
    Layout,
    Tags,
} from 'Taxonomy'
import { Layout as RunnableLayout } from 'TagsParts'

const getData = routeLoader$(async ({ params }) => {

    const { entityType } = params
    const data = await getFromCacheOrApi(`/tag/all?entityType=${entityType}`)
    return {
        entityType,
        tags: data
    }
})

const BaseTags = component$(() => {

    const data = getData().value
    const {
        entityType,
        tags,
    } = data

    return RunnableLayout
        ?
        <RunnableLayout {...data} />
        :
        <Layout {...data} />
})

export default BaseTags
