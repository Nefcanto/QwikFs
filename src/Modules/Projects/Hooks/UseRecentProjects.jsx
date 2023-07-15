import { getFromCacheOrApi } from 'Base'

const useRecentProjects = async (count) => {
    const projects = await getFromCacheOrApi(`/projects/latestProjects?locale=null&count=${count}`)
    return projects
}

export default useRecentProjects
