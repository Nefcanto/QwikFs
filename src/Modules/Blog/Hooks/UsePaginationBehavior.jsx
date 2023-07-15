// import { useRouter } from 'next/router'

const usePaginationBehavior = () => {

    // const { query, asPath } = useRouter()
    // const { slug, key } = query

    const getLink = (pageNumber) => {

        // let url = '/blog'

        // if (asPath.startsWith('/blog/category')) {
        //     if (slug) {
        //         url += `/category/${slug}`
        //     }
        // }

        // if (asPath.startsWith('/blog/tag')) {
        //     if (slug) {
        //         url += `/tag/${slug}`
        //     }
        // }

        // if (asPath.startsWith('/blog/author')) {
        //     if (slug) {
        //         url += `/author/${slug}`
        //     }
        // }

        // if (asPath.startsWith('/blog/search')) {
        //     if (key) {
        //         url += `/search/${key}`
        //     }
        // }

        // if (pageNumber && pageNumber > 1) {
        //     url += `/${pageNumber}`
        // }

        // return url

        return "not-implemented"
    }

    return {
        getLink
    }
}

export default usePaginationBehavior
