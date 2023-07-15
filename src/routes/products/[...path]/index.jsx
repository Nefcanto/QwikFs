import {
    component$,
    useSignal,
} from '@builder.io/qwik'
import {
    getData,
    Layout,
} from 'Products'
import { Layout as RunnableLayout } from 'ProductsParts'

const Products = component$(() => {

    const data = getData().value

    const {
        categories,
        latest,
        popular,
        products,
        seo,
    } = data || {}

    return RunnableLayout
        ?
        <RunnableLayout {...data} />
        :
        <Layout {...data} />
})

export default Products

export { getData }

const head = ({
    params,
    resolveValue,
}) => {

    const data = resolveValue(getData)

    return {
        title: data?.title || 'Products'
    }
}

export { head }
