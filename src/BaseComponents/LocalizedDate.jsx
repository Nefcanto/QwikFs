import {
    component$,
    useSignal,
    useVisibleTask$,
} from '@builder.io/qwik'

const LocalizedDate = component$(({
    locale,
    utcDate,
}) => {

    const localizedDate = useSignal('')

    useVisibleTask$(() => {
        localizedDate.value = new Date(utcDate).toLocaleDateString('en-US')
        if (locale === 'fa') {
            localizedDate.value = new Date(utcDate).toLocaleDateString('fa-IR')
        }
    }, {
        strategy: 'document-ready'
    })

    return <>
        <span>{localizedDate.value}</span>
    </>
})

export default LocalizedDate
