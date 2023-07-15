import { component$ } from '@builder.io/qwik'
import { GetSeo } from 'Seo'
import {
    getPost,
    PostLayout,
} from 'Vlog'
import { Layout as RunnableLayout } from 'VlogPostParts'

const VlogPost = component$(() => {

    const data = getPost().value

    return RunnableLayout
        ?
        <RunnableLayout {...data} />
        :
        <PostLayout {...data} />
})

export default VlogPost

export { getPost }

const head = ({ resolveValue }) => {
    return GetSeo(getPost, resolveValue)
}

export { head }
