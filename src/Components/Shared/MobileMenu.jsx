import {
    component$,
    useSignal,
    useVisibleTask$,
} from '@builder.io/qwik'

const MobileMenu = component$(({ menuItems }) => {

    const isOpen = useSignal(false)

    useVisibleTask$(() => {
        console.log('hooked')
        on('menuClicked', () => {
            console.log('now is ' + isOpen.value)
            isOpen.value = !isOpen.value
        })
    })

    return isOpen.value && <div class="lg:hidden absolute w-48 h-48 bg-red-800 mx-auto top-0 end-0 bottom-0 start-0" >
        Mobile menu
    </div>
})

export default MobileMenu
