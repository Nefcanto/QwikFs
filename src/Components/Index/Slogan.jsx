const Slogan = ({ text }) => {
    return <>
        <section class="pt-10 sm:pt-14 bg-paydar-color3">
            <div class="max-w-prose mx-auto px-3 xl:px-0 text-center">
                <strong class="text-lg leading-[2] md:text-2xl md:leading-[2] text-center text-paydar-color1 max-w-prose">
                    {text}
                </strong>
            </div>
        </section>
    </>
}

export default Slogan
