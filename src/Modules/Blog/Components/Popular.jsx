import { Image } from 'Base'
import { Section } from 'Blog'

const Popular = ({
    popular
}) => {

    return <Section title="Popular posts">
        {
            popular?.map(i => <div
                key={i.id}
                class="flex gap-4 mb-4 "
            >
                <Image
                    containerClass="w-20 aspect-square shrink-0"
                    imageClass="rounded-tl rounded-tr "
                    src={i.relatedItems.imageUrl}
                />
                <div class=" ">
                    <div class="text-gray-400 text-sm">
                        {
                            new Date(i.utcDate || i.lastUpdateUtcDate).toUTCString().split(' ').slice(1, 4).join(' ')
                        }
                    </div>
                    <h3 class="font-bold mt-0.5 text-md text-slate-800 drop-shadow">{i.title}</h3>
                </div>
            </div>)
        }
    </Section>
}

export default Popular
