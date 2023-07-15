import {
    useSignal,
    useVisibleTask$
} from '@builder.io/qwik'

const useMessage = () => {

    const isSuccess = useSignal(false)
    const isMessageShown = useSignal(false)

    useVisibleTask$(({ track }) => {
        track(() => isMessageShown.value)

        if (isMessageShown.value) {
            setTimeout(() => isMessageShown.value = false, 3_000)

        }
    }, { strategy: 'document-ready' })

    return {
        isSuccess,
        isMessageShown
    }
}

export default useMessage
