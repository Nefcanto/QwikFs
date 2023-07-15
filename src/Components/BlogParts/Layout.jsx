import {
    Categories,
    Post,
} from 'BlogParts'
import { ChevronDoubleLeft } from 'Svg'

const Layout = ({
    categories,
    posts,
}) => {
    return <>
        <section class="relative bg-paydar-color1 py-10 sm:pb-20">
            <div class="max-w-7xl mx-auto px-3 xl:px-0">
                <div class="flex flex-wrap items-center gap-1 text-white mb-10">
                    <span>
                        you are here:
                    </span>
                    <a href="/">Home</a>
                    <ChevronDoubleLeft
                        class="w-3 h-3"
                    />
                    <span class="text-paydar-color2">Blog</span>
                </div>
                <h1 class="font-bold text-white text-2xl text-center">
                    Blog
                </h1>
            </div>
        </section>

        <Categories categories={categories} />

        <section class="py-10 sm:py-20">
            <div class="max-w-5xl mx-auto px-3 xl:px-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-8">
                {
                    posts?.data?.map(post => <Post {...post} />)
                }
            </div>
        </section>
    </>
}

export default Layout
