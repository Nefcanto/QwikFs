import { Title } from 'Shared'
const Pricing = ({
    colorfulTitle,
    items,
    subtitle,
    title,
}) => {
    return <>
        <section class="relative pt-10 pb-10 sm:pb-20 bg-paydar-color3 after:absolute  after:content-[''] after:bg-paydar-color1 after:w-full after:h-[72%] after:top-0 after:start-0 after:z-0">
            <div class="relative z-10 max-w-5xl mx-auto px-3 xl:px-0">

                <Title
                    title={title}
                    subtitle={subtitle}
                    colorfulTitle={colorfulTitle}
                    inverse
                />

                <div class="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-14 mt-10">
                    {
                        items?.map((item, index) => <>
                            <div class="max-w-full w-full xs:w-[340px] overflow-hidden mx-auto p-3" key={item?.id}>
                                <div class="max-w-full w-full xs:w-[320px] md:w-full flex flex-col items-center gap-5 bg-white rounded-lg px-4 py-8 mx-auto shadow-md">

                                    {
                                        index == 1 &&
                                        <div class="w-full relative">
                                            <div class="absolute content-[''] bg-paydar-color2 w-52 text-white text-center -end-20 top-0 origin-center -rotate-45">
                                                {item?.special}
                                            </div>
                                        </div>
                                    }

                                    <div class="w-[90px] aspect-square flex justify-center items-center bg-paydar-color3 rounded-full p-2 overflow-hidden">
                                        <img
                                            src={item?.image}
                                            alt={item?.title}
                                            class="w-[50px] aspect-square object-contain"
                                        />
                                    </div>

                                    <div class="font-bold text-lg line-clamp-1">
                                        {item?.title}
                                    </div>

                                    <div class="text-paydar-color31 line-clamp-4 text-center">
                                        {item?.summary}
                                    </div>

                                    <a
                                        href={item?.firstCtaLink}
                                        class="rounded-3xl text-white text-center py-2 bg-paydar-color2 px-5 hover:bg-paydar-color1 transition-all"
                                    >
                                        {item?.firstCtaText}
                                    </a>

                                    <a
                                        href={item?.secondCtaLink}
                                        class="text-paydar-color31 text-center hover:text-paydar-color1 transition-all"
                                    >
                                        {item?.secondCtaText}
                                    </a>

                                </div>
                            </div>
                        </>)
                    }
                </div>

            </div>
        </section>
    </>
}

export default Pricing

