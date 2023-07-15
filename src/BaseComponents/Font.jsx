import { component$ } from '@builder.io/qwik'

const Font = component$(({ name }) => {

    return (
        <>
            <link
                href={`/Fonts/Persian/${name}/Font.css`}
                type='text/css'
                rel='stylesheet'
            />
        </>
    )
})

export default Font
