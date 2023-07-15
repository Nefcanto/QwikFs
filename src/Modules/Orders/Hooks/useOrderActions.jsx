import { post } from 'Base'
import { useAuthSession } from 'Accounts'

const useOrderActions = (session) => {

    const addItem = async (entityGuid, entityType, quantity) => {
        if (session?.value && session?.value?.user?.guid) {
            try {
                return await post('order/additem', {
                    "entityGuid": entityGuid,
                    "entityType": entityType,
                    "quantity": quantity,
                    "userGuid": session?.value.user.guid
                })
            } catch (error) {
                console.log(error)
            }
        } else {
            console.log('NOT LOGGED IN OR NO USERGUID!')
        }
    }

    const removeItem = async (entityGuid, entityType) => {
        if (session?.value && session?.value?.user?.guid) {
            try {
                return await post('order/removeitem', {
                    "entityGuid": entityGuid,
                    "entityType": entityType,
                    "userGuid": session?.value.user.guid
                })
            } catch (error) {
                console.log(error)
            }
        } else {
            console.log('NOT LOGGED IN OR NO USERGUID!')
        }
    }

    const increaseQuantity = async (entityGuid, entityType) => {
        if (session?.value && session?.value?.user?.guid) {
            try {
                return await post('order/increasequantity', {
                    "entityGuid": entityGuid,
                    "entityType": entityType,
                    "userGuid": session?.value.user.guid
                })
            } catch (error) {
                console.log(error)
            }
        } else {
            console.log('NOT LOGGED IN OR NO USERGUID!')
        }
    }

    const decreaseQuantity = async (entityGuid, entityType) => {
        if (session?.value && session?.value?.user?.guid) {
            try {
                return await post('order/decreasequantity', {
                    "entityGuid": entityGuid,
                    "entityType": entityType,
                    "userGuid": session?.value.user.guid
                })
            } catch (error) {
                console.log(error)
            }
        } else {
            console.log('NOT LOGGED IN OR NO USERGUID!')
        }
    }
    const removeCart = async () => {
        if (session?.value && session?.value?.user?.guid) {
            try {
                return await post('order/removecart', {
                    "userGuid": session?.value.user.guid
                })
            } catch (error) {
                console.log(error)
            }
        } else {
            console.log('NOT LOGGED IN OR NO USERGUID!')
        }
    }

    return {
        addItem,
        removeItem,
        increaseQuantity,
        decreaseQuantity,
        removeCart,
    }
}

export default useOrderActions
