import {
    component$,
    useSignal,
    useVisibleTask$,
} from '@builder.io/qwik'

const CountUp = component$(({
    isRtl,
    number,
    prefixText,
}) => {

    const finalNumber = useSignal(+number)
    const counter = useSignal(0)

    useVisibleTask$(({ cleanup }) => {

        const interval = setInterval(() => {
            if (counter.value < finalNumber.value) {
                counter.value++
            } else {
                clearInterval(interval)
            }
        }, Math.floor(2000 / finalNumber.value) || 1)
        cleanup(() => clearInterval(interval))
    })
    return <span dir={isRtl ? 'rtl' : 'ltr'}>
        {prefixText && prefixText}
        <span>{counter.value}</span>
    </span>
})

export default CountUp
