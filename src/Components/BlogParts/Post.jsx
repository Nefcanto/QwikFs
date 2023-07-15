import { Image } from 'Base'
import { usePostUrl } from 'Blog'
import {
    Calendar,
    Sheet,
} from 'Svg'

const Post = ({
    relatedItems,
    slug,
    summary,
    title,
}) => {
    return <div class="max-w-full w-[360px] mx-auto shadow rounded-xl overflow-hidden group">

        <a
            href={usePostUrl(slug)}
        >
            <Image
                src={relatedItems?.imageUrl}
                alt={title}
                containerClass="w-full aspect-[1/.72]"
                imageClass=""
            />
        </a>

        <a
            href={usePostUrl(slug)}
            class="block relative mt-4 mb-2 pb-2 px-3 after:absolute after:content-[''] after:bg-paydar-color1 after:bottom-0 after:s-0 after:e-0 after:mx-auto after:w-14 after:h-1 after:group-hover:bg-paydar-color2 after:transition-all"
        >
            <h4 class='text-lg text-center line-clamp-2 h-14 font-bold text-paydar-color32 group-hover:text-paydar-color1 transition-all'>
                {title}
            </h4>
        </a>

        <p class="h-24 overflow-hidden line-clamp-4 text-paydar-color32 my-8 px-3">
            {summary}
        </p>

        <div class="w-[94%] mx-auto py-2 flex justify-between items-center text-sm sm:text-md text-paydar-color31 border-t border-dashed border-paydar-color31">

            <a
                href=""
                class="flex items-center gap-1.5">

                <Sheet />
                <span>category</span>

            </a>

            <div class="flex items-center gap-1.5">

                <span>calendar</span>
                <Calendar />

            </div>

        </div>

    </div>
}

export default Post
