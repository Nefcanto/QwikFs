import { component$ } from '@builder.io/qwik'
import { GetSeo } from 'Seo'
import {
    getProject,
    ProjectLayout,
} from 'Projects'
import { Layout as RunnableLayout } from 'ProjectParts'

const Project = component$(() => {

    const data = getProject().value

    return RunnableLayout
        ?
        <RunnableLayout {...data} />
        :
        <ProjectLayout {...data} />
})

export default Project

export { getProject }

const head = ({ resolveValue }) => {
    return GetSeo(getProject, resolveValue)
}

export { head }
