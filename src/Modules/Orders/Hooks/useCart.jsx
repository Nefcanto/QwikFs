import { post } from 'Base'

const useCart = async (session) => {
    if (session?.value?.user && session?.value?.user?.guid) {
        try {
            return await post('order/getcart', {
                "userGuid": session.value.user.guid
            })
        } catch (error) {
            console.log(error)
        }
    } else {
        console.log('NOT LOGGED IN OR NO USERGUID!')
    }
}

export default useCart
