const useCourses = () => {

    const getCourseUrl = course => {
        return `/course/${course?.slug}`
    }
    const getCourseCategoryUrl = hierarchy => {
        return `/courses/category/${hierarchy?.slug}`
    }

    const getCourseTagUrl = tag => {

        return `/courses/tag/${tag?.slug}`
    }

    return {
        getCourseCategoryUrl,
        getCourseTagUrl,
        getCourseUrl,
    }
}

export default useCourses
