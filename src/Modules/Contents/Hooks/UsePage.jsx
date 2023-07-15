import { useLocation } from '@builder.io/qwik-city'
import { getFromCacheOrApi } from 'Base'
import useSections from './UseSections'

const usePage = async (key, query) => {

    // const locale = useLocation().url.searchParams.get('locale')
    const locale = query?.get('locale')
    const page = await getFromCacheOrApi(`/page/get?key=${key}&locale=${locale}`)
    const transformedSections = useSections(page)
    const { sections, ...sectionlessPage } = page
    return {
        ...sectionlessPage,
        ...transformedSections
    }
}

export default usePage
