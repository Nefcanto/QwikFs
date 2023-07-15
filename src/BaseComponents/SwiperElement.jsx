import {
    $,
    component$,
    Slot,
    useStyles$,
    useVisibleTask$,
} from '@builder.io/qwik'
import Swiper from 'swiper'
import {
    Autoplay,
    HashNavigation,
    Navigation,
    Pagination,
    Thumbs,
} from 'swiper/modules'
import swiperStyles from 'swiper/css'
import paginationStyle from 'swiper/css/pagination'
import navigationStyle from 'swiper/css/navigation'
import SwiperConfig from '../Base/SwiperConfig'

const SwiperElement = component$(({
    config,
    containerClass,
    name,
    navigation: NavigationElements,
    paginationClass,
}) => {

    if (!name) {
        return <div class='bg-red-800 text-white p-10'>Swiper name is not defined</div>
    }

    const {
        modules,
        navigation,
        onSwiper: OnSwiper,
        pagination,
        thumbs,
        ...rest
    } = config || {}

    useStyles$(paginationStyle)
    useStyles$(navigationStyle)
    useStyles$(swiperStyles)
    useVisibleTask$(() => {

        const mergedConfig = {
            ...SwiperConfig,
            modules: [
                Autoplay,
                HashNavigation,
                Navigation,
                Pagination,
                Thumbs,
            ],
            hashNavigation: {
                watchState: true,
            },
            ...(pagination && Object.keys(pagination)?.length > 0 && {
                pagination: {
                    ...pagination,
                }
            }),
            ...(navigation && Object.keys(navigation)?.length > 0 && {
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                    ...navigation,
                }
            }),
            ...rest,
        }
        new Swiper(`.${name}`, mergedConfig)
    }, {
        strategy: 'document-ready'
    })

    return <div class={`w-full swiper relative ${name} ${containerClass}`}>
        <div class={`swiper-wrapper`} >
            <Slot />
        </div>
        {NavigationElements && <NavigationElements />}
        {paginationClass && <div class={`swiper-pagination ${paginationClass}`}></div>}
    </div >

})

export default SwiperElement
