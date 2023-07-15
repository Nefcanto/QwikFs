import { RichText } from 'Base'

const Layout = ({
    content,
    page,
}) => {
    return <>
        <section class="pt-44 pb-10 lg:py-32 bg-zinc-100">
            <div class="max-w-xl mx-auto px-3 xl:px-0">
                <h1 class='text-2xl lg:text-4xl font-bold text-center mb-6 lg:mb-20'>
                    {page?.title}
                </h1>

                <RichText
                    content={content}
                    class="prose max-w-none [&>ul>li]:my-[3px] [&>ol>li]:my-[3px] [&>img]:my-[25px] [&>img]:mx-auto [&>table]:overflow-x-scroll [&>table]:border [&>table]:border-slate-950 [&>table]:border-collapse [&>td]:py-[10px] [&>td]:px-[5px] [&>td]:border [&>td]:border-slate-950 [&>td]:border-collapse [&>th]:border [&>th]:border-slate-950 [&>th]:border-collapse"
                    container=''
                    h1='font-bold mt-[30px] text-[1.75rem]'
                    h2='font-bold mt-[20px] text-[1.5rem]'
                    h3='font-bold mt-[20px] text-[1.25rem]'
                    h4='font-bold mt-[15px] mb-[10px] text-[1.15rem]'
                    h5='mt-[3px] mb-[10px] font-600 text-[1.08rem]'
                    h6='mt-[3px] mb-[10px] font-600 text-[1.08rem]'
                    p='mt-[3px] mb-[10px]'
                    a='text-paydar-color1 hover:text-paydar-color3 transition-all'
                    ul='my-[7rem] mx-[2rem] list-disc'
                    ol='my-[7rem] mx-[2rem] list-disc'
                    quote=''
                />
            </div>
        </section>
    </>
}

export default Layout
