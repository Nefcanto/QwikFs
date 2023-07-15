import { getFromCacheOrApi } from 'Base'

const useHierarchies = async (entityType, query) => {
    const locale = query?.get('locale')
    const hierarchies = await getFromCacheOrApi(`/hierarchyCommon/tree?entityType=${entityType}&locale=${locale}`)
    return hierarchies
}

export default useHierarchies
