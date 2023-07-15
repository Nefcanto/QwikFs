import { component$ } from '@builder.io/qwik'
import { useLocation } from '@builder.io/qwik-city'
import { Image } from 'Base'
import { useGlobalization } from 'Globalization'
import { Title } from 'Shared'
import { ArrowLeft } from 'Svg'

const Services = component$(async ({
    items,
    servicesLink,
    servicesText,
    subtitle,
    title,
}) => {

    const params = useLocation().url.searchParams
    const { currentLocale } = await useGlobalization(params)

    return <>
        <section class="relative bg-paydar-color1 -mt-72 pt-20 sm:pt-52 pb-8 sm:pb-20 before:absolute before:contents[''] before:top-0 before:start-0 before:w-full before:h-5 lg:before:h-48 before:border-e-[100vw] before:border-e-paydar-color3 before:border-b-[10vw] before:border-b-[transparent]" id="services">
            <div class="max-w-5xl mx-auto px-3 xl:px-0">

                <Title
                    title={title}
                    subtitle={subtitle}
                    inverse
                />

                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 mt-10">
                    {
                        items?.map(item => <>
                            <div class="max-w-full w-full xs:w-[220px] sm:w-full flex flex-col items-center gap-5 bg-white rounded-lg px-4 py-8 mx-auto">
                                <Image
                                    src={item?.image}
                                    alt={item?.title}
                                    containerClass="w-[60px] aspect-square"
                                />
                                <div class="font-bold text-lg line-clamp-1">
                                    {item?.title}
                                </div>
                                <div class="text-paydar-color31 line-clamp-2 text-center">
                                    {item?.summary}
                                </div>
                            </div>
                        </>)
                    }
                </div>

                <div class="mt-10 text-center">
                    <a
                        href={servicesLink}
                        class="inline-flex items-center gap-2 rounded-3xl text-white text-center py-2 bg-paydar-color2 px-5 hover:rounded-md transition-all"
                    >
                        {servicesText}
                        <ArrowLeft class={currentLocale.isRtl ? '' : 'rotate-180'} />
                    </a>

                </div>
            </div>
        </section>
    </>
})

export default Services
