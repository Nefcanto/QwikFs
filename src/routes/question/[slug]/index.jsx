import { component$ } from '@builder.io/qwik'
import { GetSeo } from 'Seo'
import {
    getQuestion,
    QuestionLayout,
} from 'Questions'
import { Layout as RunnableLayout } from 'QuestionParts'

const question = component$(() => {

    const data = getQuestion().value

    return RunnableLayout
        ?
        <RunnableLayout {...data} />
        :
        <QuestionLayout {...data} />
})

export default question

export { getQuestion }

const head = ({ resolveValue }) => {
    return GetSeo(getQuestion, resolveValue)
}

export { head }
