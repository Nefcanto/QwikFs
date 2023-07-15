import { getFromCacheOrApi } from 'Base'
import  getDefaultLocale  from './GetDefaultLocale'

const getGlobalization = async (query) => {

    const globalizationData = await getFromCacheOrApi(`/globalization/data`)
    const locale = query?.get('locale')
    let currentLocale = globalizationData?.locales?.find(i => i.key == locale)
    let defaultLocale = getDefaultLocale(globalizationData?.locales);
    
    if (!currentLocale) {
        currentLocale = globalizationData?.locale
    }

    return {
        ...globalizationData,
        currentLocale,
        defaultLocale,
    }
}

export default getGlobalization
