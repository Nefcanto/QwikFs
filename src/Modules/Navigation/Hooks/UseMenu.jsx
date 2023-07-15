import { useLocation } from '@builder.io/qwik-city'
import { getFromCacheOrApi } from 'Base'

const useMenu = async (query) => {

    // const locale = useLocation().url.searchParams.get('locale')
    const locale = query?.get('locale')
    const data = await getFromCacheOrApi(`/menu/data?locale=${locale}`)
    return data

}

export default useMenu
