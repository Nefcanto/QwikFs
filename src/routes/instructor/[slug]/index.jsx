import { component$ } from '@builder.io/qwik'
import { GetSeo } from 'Seo'
import {
    getInstructor,
    InstructorLayout,
} from 'Courses'
import { Layout as RunnableLayout } from 'InstructorParts'

const Instructor = component$(() => {

    const data = getInstructor().value

    return RunnableLayout
        ?
        <RunnableLayout {...data} />
        :
        <InstructorLayout {...data} />
})

export default Instructor

export { getInstructor }

const head = ({ resolveValue }) => {
    return GetSeo(getInstructor, resolveValue)
}

export { head }
