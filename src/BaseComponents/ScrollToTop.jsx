import {
    $,
    component$,
    Slot,
    useOnWindow,
    useSignal,
} from '@builder.io/qwik'

const ScrollToTop = component$(({ class: className }) => {

    const isShown = useSignal(false)

    useOnWindow(
        'scroll',
        $((event) => {
            if (window.screenY > 0) {
                isShown.value = true
            } else {
                isShown.value = false
            }
        })
    )

    const clickToTopHandler = $(() => {
        window.scrollTo({
            behavior: "smooth",
            top: 0,
        })
    })

    return <>
        {
            isShown.value ?
                <div
                    onClick$={clickToTopHandler}
                    class={`fixed ${className}`}>
                    <Slot />
                </div>
                :
                null
        }
    </>
})

export default ScrollToTop
