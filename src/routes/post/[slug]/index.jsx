import {
    component$,
    useVisibleTask$
} from '@builder.io/qwik'
import { GetSeo } from 'Seo'
import { useIncreaseViewCount } from 'Social'
import {
    getPost,
    PostLayout,
} from 'Blog'
import { Layout as RunnableLayout } from 'PostParts'

const Post = component$(() => {

    const data = getPost().value

    const { post } = data

    useVisibleTask$(() => {

        useIncreaseViewCount('BlogPost', post.guid)

    }, { strategy: 'document-ready' })

    return RunnableLayout
        ?
        <RunnableLayout {...data} />
        :
        <PostLayout {...data} />
})

export default Post

export { getPost }

const head = ({ resolveValue }) => {
    return GetSeo(getPost, resolveValue)
}

export { head }
