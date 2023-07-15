import { getFromCacheOrApi } from 'Base'

export const onRequest = async ({ 
    query,
    locale 
}: {
    query: any,
    locale: any 
}) => {

    const globalizationData = await getFromCacheOrApi(`/globalization/data`)
    const incomingLocale = query?.get('locale')
    let currentLocale = globalizationData?.locales?.find((i: any) => i.key == incomingLocale)
    if (!currentLocale) {
        currentLocale = globalizationData?.locale
    }

    locale(currentLocale?.key);
}
