import { getFromCacheOrApi } from 'Base'
import { useSystemConfig } from 'Configuration'

const useCategoryPostsByConfigKeys = async (configKeys) => {
    const { configs, getKeyFromValue } = await useSystemConfig()
    let csv = ''
    configKeys.forEach(key => csv += `,${configs[key]}`)
    const posts = await getFromCacheOrApi(`/blog/getCategoryPostsByConfigKeys?configKeys=${csv}`)
    for (let post in posts) {
        if (post === 'milliseconds') {
            continue
        }
        const key = getKeyFromValue(post)
        posts[key] = posts[post]
    }
    return posts
}

export default useCategoryPostsByConfigKeys
