import {
    component$,
    useSignal,
} from '@builder.io/qwik'
import { GetSeo } from 'Seo'
import {
    getData,
    Layout,
} from 'Projects'
import { Layout as RunnableLayout } from 'ProjectsParts'

const Projects = component$(() => {

    const data = getData().value

    const {
        categories,
        latest,
        popular,
        projects,
        seo,
    } = data || {}

    return RunnableLayout
        ?
        <RunnableLayout {...data} />
        :
        <Layout {...data} />
})

export default Projects

export { getData }

const head = ({ resolveValue }) => {
    return GetSeo(getData, resolveValue)
}

export { head }
