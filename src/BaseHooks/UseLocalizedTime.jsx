import { useLocation } from '@builder.io/qwik-city'

const useLocalizedTime = (utcDate) => {
    console.log("kdjflksdjflkjsfkl",utcDate)
    if(!utcDate)
    {
        return ""
    }   

    var normalizedValue = (utcDate && utcDate?.toString()?.endsWith('Z')) ? utcDate : (utcDate + 'Z')

    const { url } = useLocation()
    const { searchParams } = url
    var locale = searchParams?.get('locale')

    // if (!locale) {
    //     const { defaultLocale } = await getGlobalization(searchParams)

    //     locale = defaultLocale?.key?.toLowerCase()
    // }

    if (locale?.toLowerCase() === 'fa') {
        return new Date(normalizedValue)?.toLocaleTimeString('fa-IR')
    }

    return new Date(normalizedValue)?.toLocaleTimeString('fa-IR')
}

export default useLocalizedTime
