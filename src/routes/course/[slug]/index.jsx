import { component$ } from '@builder.io/qwik'
import { GetSeo } from 'Seo'
import {
    CourseLayout,
    getCourse,
} from 'Courses'
import { Layout as RunnableLayout } from 'CourseParts'

const Course = component$(() => {

    import('CourseParts').then(module => console.log(module))

    const data = getCourse().value

    return RunnableLayout
        ?
        <RunnableLayout {...data} />
        :
        <CourseLayout {...data} />
})

export default Course

export { getCourse }

const head = ({ resolveValue }) => {
    return GetSeo(getCourse, resolveValue)
}

export { head }
