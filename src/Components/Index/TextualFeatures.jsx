import { Title } from 'Shared'
import { WhiteSquare } from 'Svg'
const TextualFeatures = ({
    items,
    supertitle,
    title,
}) => {
    return <>
        <section class="relative pt-10 pb-10 sm:pb-32 bg-paydar-color3 overflow-hidden">

            <div class="absolute -end-52 -bottom-10 z-0">
                <WhiteSquare
                    class="h-80"
                />
            </div>

            <div class="relative z-10 max-w-5xl mx-auto px-3 xl:px-0">

                <Title
                    title={title}
                    subtitle={supertitle}
                />

                <ul class="md:columns-2 lg:columns-4 md:gap-7 lg:gap-12 mt-10 text-paydar-color31 text-center md:text-end">
                    {
                        items?.map(item => <>
                            <li
                                class="line-clamp-1 text-start my-2"
                                title={item.text}
                            >
                                {item.text}
                            </li>
                        </>)
                    }
                </ul>

            </div>
        </section>
    </>
}

export default TextualFeatures

