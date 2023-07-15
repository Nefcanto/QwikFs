import { Image } from 'Base'
import { ArrowDown } from 'Svg'

const Hero = ({
    desktopImage,
    emphasizedTitle,
    firstCtaLink,
    firstCtaText,
    mobileImage,
    secondCtaLink,
    secondCtaText,
    summary,
    supertitle,
    tabletImage,
    titleEnd,
    titleStart,
}) => {

    return <>
        <section class="relative bg-paydar-color3 pt-10 md:pt-20 pb-72">

            <div class="max-w-7xl mx-auto px-3 xl:px-0 flex flex-col md:flex-row gap-10 items-center">
                <div class="w-full md:w-1/2 md:text-auto text-center md:text-start ">
                    <h2 class="text-paydar-color31 text-sm">
                        {supertitle}
                    </h2>
                    <h1 class="text-paydar-color1 text-3xl lg:text-4xl font-black mt-5">
                        {titleStart} <span class='text-paydar-color2'>{emphasizedTitle}</span> {titleEnd}
                    </h1>
                    <h2 class="text-paydar-color31 text-sm mt-6 mb-14 max-w-prose mx-auto md:ms-0">
                        {summary}
                    </h2>
                    <div class="flex gap-3 justify-center md:justify-normal">
                        <a
                            href={firstCtaLink}
                            class="rounded-3xl text-white w-[120px] text-center py-2 bg-paydar-color1 hover:rounded-md transition-all"
                        >
                            {firstCtaText}
                        </a>
                        <a
                            href={secondCtaLink}
                            class="rounded-3xl text-white w-[120px] text-center py-2 bg-paydar-color2 hover:rounded-md  transition-all"
                        >
                            {secondCtaText}
                        </a>
                    </div>
                </div>

                <div class="w-full md:w-1/2">
                    <Image
                        src={mobileImage}
                        alt={`${titleStart} ${emphasizedTitle} ${titleEnd}`}
                        containerClass="sm:hidden w-full aspect-[1/.63]"
                        priority
                    />
                    <Image
                        src={tabletImage}
                        alt={`${titleStart} ${emphasizedTitle} ${titleEnd}`}
                        containerClass="hidden md:block lg:hidden w-full aspect-[2/1]"
                        priority
                    />
                    <Image
                        src={desktopImage}
                        alt={`${titleStart} ${emphasizedTitle} ${titleEnd}`}
                        containerClass="hidden sm:block md:hidden lg:block w-full aspect-[2/1]"
                        priority
                    />
                </div>

            </div>

            <div class="hidden md:block absolute w-full h-16 text-center end-0 start-0 mx-auto bottom-32 lg:bottom-52 z-20">
                <a
                    href="#services"
                    class="w-16 aspect-square flex justify-center items-center mx-auto rounded-full bg-paydar-color31 bg-opacity-40">
                    <ArrowDown />
                </a>
            </div>

        </section>
    </>
}

export default Hero
