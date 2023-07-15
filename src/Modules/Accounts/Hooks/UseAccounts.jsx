import { useAuthSession } from 'Accounts'

const useAccounts = () => {
    const session = useAuthSession()
    const isLoggedIn =
        session &&
        session.value &&
        session.value.expires &&
        new Date(session.value.expires) > new Date()

    return {
        isLoggedIn,
        user: session?.value?.user
    }
}

export default useAccounts
