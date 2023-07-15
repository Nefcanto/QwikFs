import { component$ } from '@builder.io/qwik'
import { useLocation } from '@builder.io/qwik-city'
import { useGlobalization } from 'Globalization'
import { Font } from 'Base'

const Head = component$(async () => {

    const params = useLocation().url.searchParams
    const { currentLocale } = await useGlobalization(params)

    return <>
        <meta
            name="theme-color"
            content="#ff9127"
        />
        <meta
            name="description"
            content="Holism is technical peace; A software production line that has solutions for all aspects of the complete cycle of software development, from recruiting developers to working in production."
        />
        {
            currentLocale.key === 'fa'
                ?
                <Font name="IranSansX" />
                :
                currentLocale.key === 'en'
                    ?
                    <link href="https://fonts.googleapis.com/css2?family=Dosis:wght@400;500;600;700;800&amp;display=swap" rel="stylesheet" />
                    :
                    null
        }
    </>
})

export default Head
