import {
    component$,
    Slot,
} from '@builder.io/qwik'

const SwiperSlide = component$(({
    class: className,
    key,
}) => {

    return <div
        key={key}
        data-hash={key}
        class={`swiper-slide ${className}`}
    >
        <Slot />
    </div>
})

export default SwiperSlide
