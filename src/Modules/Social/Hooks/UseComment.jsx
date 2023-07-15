import {
    $,
    useSignal,
} from '@builder.io/qwik'
import {
    post,
    useMessage
} from 'Base'

const useComment = (entityType, entityGuid) => {

    const model = useSignal({
        entityGuid: entityGuid,
        entityType: entityType,
        name: "",
        email: "",
        website: "",
        body: "",
    })

    const {
        isMessageShown,
        isSuccess,
    } = useMessage()
    
    const handleSubmit = $(async () => {
        model.value={
            entityGuid: entityGuid,
            entityType: entityType,
            name: "",
            email: "",
            website: "",
            body: "",
        }
        await post('/Comment/save', model.value).then(data => {
            isSuccess.value = isMessageShown.value = true          
        }, e => {
            isSuccess.value = false
            isMessageShown.value = true
        })
    })

    return {
        model,
        handleSubmit,
        isSuccess,
        isMessageShown,
    }
}

export default useComment
