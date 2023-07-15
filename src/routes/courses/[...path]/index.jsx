import { component$ } from '@builder.io/qwik'
import { GetSeo } from 'Seo'
import {
    getData,
    Layout,
} from 'Courses'
import { Layout as RunnableLayout } from 'CoursesParts'

const Courses = component$(() => {
    const data = getData().value

    const {
        categories,
        latest,
        mostViewed,
        popular,
        courses,
        seo,
        tags,
    } = data || {}

    return RunnableLayout
        ?
        <RunnableLayout {...data} />
        :
        <Layout {...data} />
})

export default Courses

export { getData }

const head = ({ resolveValue }) => {
    return GetSeo(getData, resolveValue)
}

export { head }
