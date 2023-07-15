import {
    Categories,
    Latest,
    MostViewed,
    Popular,
    Post,
    Tags,
} from 'Blog'

const Layout = ({
    categories,
    latest,
    mostViewed,
    popular,
    posts,
    seo,
    tags,
}) => {

    const { data, metadata } = posts

    return <div class="blog grid px-4 py-20 sm:px-16 md:px-8 lg:px-10 xl:px-20 lg:grid-cols-3 lg:gap-8 max-w-screen-xl xl:mx-auto">
        <main class="lg:col-span-2">
            <div class="grid gap-8 md:grid-cols-2">
                {
                    data.map(post => <Post
                        key={post.id}
                        post={post}
                    />)
                }
            </div>
            <div>
                {/* <Pagination
                        metadata={metadata}
                        container="mt-10"
                        links="flex justify-center font-semibold text-gray-800"
                        link="bg-white mx-0.5 h-10 aspect-square shadow-lg shadow-gray-300 grid place-items-center hover:bg-cta-reverse transition-colors hover:text-white text-sm "
                        count={4}
                        first={"after:content-['<<'] " + after}
                        last={"after:content-['>>'] " + after}
                    /> */}
            </div>
        </main>
        <aside>
            <Categories categories={categories} />
            <Tags tags={tags} />
            <Latest latest={latest} />
            <Popular popular={popular} />
            <MostViewed mostViewed={mostViewed} />
        </aside>
    </div>
}

export default Layout
