import {
    component$,
    useSignal,
} from '@builder.io/qwik'
import { GetSeo } from 'Seo'
import {
    getData,
    Layout,
} from 'Vlog'
import { Layout as RunnableLayout } from 'VlogParts'

const Vlog = component$(() => {

    const data = getData().value  

    return RunnableLayout
        ?
        <RunnableLayout {...data} />
        :
        <Layout {...data} />

    // return <Layout {...data} />
})

export default Vlog

export { getData }

// const head = ({ resolveValue }) => {
//     return GetSeo(getData, resolveValue)
// }

// export { head }
