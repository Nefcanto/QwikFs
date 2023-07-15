import { getFromCacheOrApi } from 'Base'

const useLatestPosts = async (count) => {
    const posts = await getFromCacheOrApi(`/blog/latestPosts?locale=null&count=${count}`)
    return posts
}

export default useLatestPosts
