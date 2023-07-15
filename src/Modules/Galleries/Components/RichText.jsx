import {
    camelize,
    Image,
} from 'Base'

const Gallery = ({
    slug,
    ...rest
}) => {

    const property = camelize(`gallery ${slug}`)
    const gallery = rest[property]
    return <>
        <h1>I am a gallary for {property}</h1>
        <div class='mx-auto flex gap-4 max-w-lg overflow-x-scroll h-64'>
            {
                gallery?.relatedItems?.images?.map(image => <Image
                    containerClass='w-48 h-48'
                    src={image.relatedItems.url}
                    alt={gallery.title}
                />
                )
            }
        </div>
    </>
}

export default Gallery
