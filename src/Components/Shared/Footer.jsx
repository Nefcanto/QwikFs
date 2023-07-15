import {
    Copyright,
    FooterAbout,
    Links,
} from 'Shared'

const Footer = ({
    copyright,
    firstLinks,
    footerAbout,
    secondLinks,
    thirdLinks,
}) => {
    return <>
        <footer class="pt-4 sm:pt-14 bg-paydar-color3">
            <div class="w-[90%] mx-auto border-y border-paydar-color31">
                <div class="max-w-5xl mx-auto px-3 xl:px-0">
                    <div class="grid grid-cols-3 sm:grid-rows-2 md:grid-rows-1 md:grid-cols-5 gap-5 md:gap-5 lg:gap-20 py-4 sm:py-14">

                        <FooterAbout {...footerAbout} />
                        <Links {...firstLinks} />
                        <Links {...secondLinks} />
                        <Links {...thirdLinks} />

                    </div>
                </div>
            </div>
            <Copyright {...copyright} />
        </footer>
    </>

}

export default Footer
