import {
    Image,
    RichText,
} from 'Base'

const Layout = ({
    breadcrumb,
    content,
    page,
    schemas,
    seo,
    ...rest
}) => {

    return <>
        <div class="max-w-5xl mx-auto px-5 xl:px-0 mt-6">

            <div class="text-center">
                <h1 class="inline-flex md:max-w-[70%] justify-center items-center my-5 py-4 px-10 font-bold leading-10 text-xl sm:text-2xl md:text-3xl text-center relative after:absolute after:content-[''] after:w-[35%] after:h-1 after:-bottom-[2.5px] after:start-0 after:end-0 after:mx-auto after:rounded-xl">
                    {page?.title}
                </h1>
            </div>
            {
                page?.relatedItems.imageUrl &&
                <Image
                    src={page?.relatedItems.imageUrl}
                    alt={page?.title}
                    containerClass="w-full aspect-[1/.4]"
                />
            }
            <div class='mt-14 mb-20 leading-8'>
                <RichText
                    content={content}
                    class="prose max-w-none [&>ul>li]:my-[3px] [&>ol>li]:my-[3px] [&>img]:my-[25px] [&>img]:mx-auto [&>table]:overflow-x-scroll [&>table]:border [&>table]:border-slate-950 [&>table]:border-collapse [&>td]:py-[10px] [&>td]:px-[5px] [&>td]:border [&>td]:border-slate-950 [&>td]:border-collapse [&>th]:border [&>th]:border-slate-950 [&>th]:border-collapse"
                    h1='font-bold mt-[30px] text-[1.75rem]'
                    h2='font-bold mt-[20px] text-[1.5rem]'
                    h3='font-bold mt-[20px] text-[1.25rem]'
                    h4='font-bold mt-[15px] mb-[10px] text-[1.15rem]'
                    h5='mt-[3px] mb-[10px] font-600 text-[1.08rem]'
                    h6='mt-[3px] mb-[10px] font-600 text-[1.08rem]'
                    p='mt-[3px] mb-[10px]'
                    a='transition-all'
                    ul='my-[1rem] mx-[1rem] list-disc'
                    ol='my-[1rem] mx-[1rem] list-disc'
                    {...rest}
                />
            </div>
        </div>
    </>
}

export default Layout
