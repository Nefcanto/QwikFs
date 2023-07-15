import {
    Calendar,
    Person,
} from 'Blog'
import { Image } from 'Base'

const Post = ({ post }) => {
    return <div
        class="bg-white rounded shadow-lg shadow-slate-200"
    >
        <Image
            src={post.relatedItems.imageUrl}
            containerClass="w-full aspect-square md:aspect-auto md:h-64 rounded-tl rounded-tr cursor-pointer "
            alt={post.title}
        />
        <div class="mx-4 mt-4 text-xs flex items-center gap-4">
            <span class="flex items-center gap-0.5">
                <Person class="scale-50 " />
                <span>{post.author || 'Admin'}</span>
            </span>
            <span class="flex items-center gap-0.5">
                <Calendar class="scale-50" />
                <span>
                    {
                        new Date(post.utcDate || post.lastUpdateUtcDate).toUTCString().split(' ').slice(1, 4).join(' ')
                    }
                </span>
            </span>
        </div>
        <h3 class="mx-4 mt-3 text-slate-800 font-bold font-dosis text-xl hover:cursor-pointer transition duration-300">{post.title}</h3>
        <p class="leading-7 text-slate-500 mx-4 mt-3 text-md lien-clamp-2 ">{post.summary}</p>
        <a
            href={`/post/${post.slug}`}
            aria-label={post.title}
            class="inline-block my-6 font-semibold text-slate-600 mx-4 text-md hover:text-black"
        >
            Read More
        </a>
    </div>
}

export default Post
