import {
    component$,
    useStylesScoped$,
} from '@builder.io/qwik'

import { usePostUrl } from 'Blog'

const Categories = component$(({ categories }) => {

    useStylesScoped$(`
        .categories::-webkit-scrollbar {
            opacity: 0;
            height: 0;
        }
    `)

    return <>
        <section class="relative -mt-10">
            <div class="relative max-w-7xl mx-auto p-3 bg-white shadow-md rounded-lg border-l-8 border-paydar-color2 after:absolute after:content-[''] after:w-2 after:h-10 after:-right-2 after:top-4 after:bg-paydar-color2">
                <div class="overflow-x-auto flex items-center gap-3 categories">
                    <span>
                        categories
                    </span>
                    {
                        categories?.map(category => <>
                            <a
                                href={usePostUrl(category?.slug)}
                                class="min-w-[190px] border border-gray-300 rounded-md p-3 text-sm text-center text-paydar-color32 hover:border-paydar-color1 hover:text-paydar-color1 transition-all"
                            >
                                {category?.title}
                            </a>
                        </>)
                    }
                </div>
            </div>
        </section>
    </>
})

export default Categories
