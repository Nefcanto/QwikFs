import { component$ } from '@builder.io/qwik'
import { routeLoader$ } from '@builder.io/qwik-city'
import { usePage } from 'Contents'
import {
    Education,
    Features,
    Hero,
    Pricing,
    Services,
    TextualFeatures,
    Slogan,
} from 'Index'

const getData = routeLoader$(async ({ query }) => {
    const page = await usePage('home', query)
    return page
})

const Index = component$(() => {

    const data = getData().value

    const {
        education,
        hero,
        services,
        pricing,
        features,
        slogan,
        textualFeatures,
    } = data

    return <>
        <Hero {...hero} />
        <Services {...services} />
        <Pricing {...pricing} />
        <Features {...features} />
        <TextualFeatures {...textualFeatures} />
        <Education {...education} />
        <Slogan {...slogan} />
    </>
})

export default Index

const head = ({
    params,
    resolveValue,
}) => {
    const data = resolveValue(getData)

    return {
        title: data?.hero?.supertitle
    }
}

export { head }
