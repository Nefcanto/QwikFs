import {
    component$,
    useSignal,
} from '@builder.io/qwik'
import { GetSeo } from 'Seo'
import {
    getData,
    Layout,
} from 'Blog'
import { Layout as RunnableLayout } from 'BlogParts'

const Blog = component$(() => {

    const data = getData().value

    const {
        categories,
        latest,
        mostViewed,
        popular,
        posts,
        seo,
        tags,
    } = data || {}

    return RunnableLayout
        ?
        <RunnableLayout {...data} />
        :
        <Layout {...data} />

    // return <Layout {...data} />
})

export default Blog

export { getData }

const head = ({ resolveValue }) => {
    return GetSeo(getData, resolveValue)
}

export { head }
