import { getFromCacheOrApi } from 'Base'

const useBranding = async (query) => {
    const locale = query?.get('locale')
    const branding = await getFromCacheOrApi(`/localeConfig/branding?locale=${locale}`)
    return {
        brand: branding.brand,
        slogan: branding.slogan,
    }
}

export default useBranding
