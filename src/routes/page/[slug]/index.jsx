import { component$ } from '@builder.io/qwik'
import { GetSeo } from 'Seo'
import {
    getData,
    Layout,
} from 'Contents'
import { Layout as RunnableLayout } from 'PageParts'

const Page = component$(() => {

    const data = getData().value

    return RunnableLayout
        ?
        <RunnableLayout {...data} />
        :
        <Layout {...data} />
})

export default Page

export { getData }

const head = ({ resolveValue }) => {
    return GetSeo(getData, resolveValue)
}

export { head }
