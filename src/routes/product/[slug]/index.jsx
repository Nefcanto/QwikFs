import { component$ } from '@builder.io/qwik'
import { GetSeo } from 'Seo'
import {
    getProduct,
    ProductLayout,
} from 'Products'
import { Layout as RunnableLayout } from 'ProductParts'

const Product = component$(() => {

    const data = getProduct().value

    return RunnableLayout
        ?
        <RunnableLayout {...data} />
        :
        <ProductLayout {...data} />
})

export default Product

export { getProduct }

const head = ({ resolveValue }) => {
    return GetSeo(getProduct, resolveValue)
}

export { head }
