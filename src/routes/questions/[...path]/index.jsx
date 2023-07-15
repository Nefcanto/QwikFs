import {
    component$,
    useSignal,
} from '@builder.io/qwik'
import { GetSeo } from 'Seo'
import {
    getData,
    Layout,
} from 'Questions'
import { Layout as RunnableLayout } from 'QuestionsParts'

const Questions = component$(() => {

    const data = getData().value

    return RunnableLayout
        ?
        <RunnableLayout {...data} />
        :
        <Layout {...data} />
})

export default Questions

export { getData }

const head = ({ resolveValue }) => {
    return GetSeo(getData, resolveValue)
}

export { head }
