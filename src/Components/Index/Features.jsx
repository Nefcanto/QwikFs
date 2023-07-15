import { Title } from 'Shared'
import { GraySquare } from 'Svg'
const Features = ({
    items,
    subtitle,
    title,
}) => {
    return <>
        <section class="relative pt-3 pb-0 sm:pt-10 sm:pb-20 bg-paydar-color3 overflow-hidden">

            <div class="absolute -start-56 bottom-20 z-0">
                <GraySquare
                    class="h-80 max-h-full"
                />
            </div>

            <div class="relative z- 10 max-w-5xl mx-auto px-3 xl:px-0">

                <Title
                    title={title}
                    subtitle={subtitle}
                />

                <div class="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-20 mt-10">
                    {
                        items?.map(item => <>
                            <div class="max-w-full w-full xs:w-[320px] md:w-full md:aspect-square flex flex-col items-center justify-center gap-5 bg-white rounded-lg px-4 py-8 mx-auto shadow-md hover:bg-paydar-color1 hover:bg-opacity-50 transition-all">

                                <div
                                    class="w-10 h-10 md:w-16 md:h-16"
                                    dangerouslySetInnerHTML={item?.svg}
                                />

                                <div class="font-bold md:text-lg line-clamp-2 text-center text-slate-800">
                                    {item?.title}
                                </div>

                            </div>
                        </>)
                    }
                </div>

            </div>
        </section>
    </>
}

export default Features

