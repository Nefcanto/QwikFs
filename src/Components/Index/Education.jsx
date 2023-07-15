import { Title } from 'Shared'

const Education = ({
    educationLink,
    educationText,
    items,
    subtitle,
    title,
}) => {

    return <>
        <section class="relative z-20 bg-paydar-color1 py-10 sm:py-20">
            <div class="max-w-5xl mx-auto px-3 xl:px-0">

                <Title
                    title={title}
                    subtitle={subtitle}
                    inverse
                />

                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-10">
                    {
                        items?.map(item => <>
                            <a
                                href={item?.link}
                                class="max-w-full w-full xs:w-[320px] sm:w-full flex flex-col items-center bg-white rounded-lg mx-auto group">
                                <img
                                    src={item?.image}
                                    alt={item?.title}
                                    class="w-full aspect-square object-cover"
                                />
                                <div class="font-bold text-md line-clamp-2 px-3 my-5 text-paydar-color1 group-hover:text-paydar-color2 transition-all">
                                    {item?.title}
                                </div>
                            </a>
                        </>)
                    }
                </div>

                <div class="mt-10 text-center">
                    <a
                        href={educationLink}
                        class="rounded-3xl text-white text-center py-2 bg-paydar-color2 px-5 hover:rounded-md transition-all"
                    >
                        {educationText}
                    </a>

                </div>
            </div>
        </section>
    </>
}

export default Education
