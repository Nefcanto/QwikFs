import {
    Image,
    RichText,
} from 'Base'

const Layout = ({
    breadcrumb,
    categories,
    content,
    latestPosts,
    post,
}) => {
    return <>
        <section class="py-10 sm:py-20">
            <div class="max-w-5xl mx-auto px-3 xl:px-0 flex gap-16">
                <div class="w-[70%]">
                    <Image
                        src={post?.relatedItems?.imageUrl}
                        alt={post?.title}
                        containerClass="w-full aspect-[1/.72] rounded-xl overflow-hidden"
                    />
                    <h1 class='font-bold text-xl text-slate-700 my-10'>
                        {post?.title}
                    </h1>
                </div>
            </div>
            <RichText
                content={content}
                class='max-w-5xl mx-auto px-3 xl:px-0'
            />
        </section>
    </>
}

export default Layout
