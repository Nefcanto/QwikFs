import { useLocation } from '@builder.io/qwik-city'
import { getFromCacheOrApi } from 'Base'
import useSections from './UseSections'

const useLayout = async (key, query) => {

    // const locale = useLocation().url.searchParams.get('locale')
    const locale = query?.get('locale')
    const layout = await getFromCacheOrApi(`/layout/get?key=${key}&locale=${locale}`)
    const { sections, ...sectionlessLayout } = layout
    const transformedSections = useSections(layout)
    return {
        ...sectionlessLayout,
        ...transformedSections
    }
}

export default useLayout
