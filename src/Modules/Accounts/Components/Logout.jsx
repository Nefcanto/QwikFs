import {
    component$,
    Slot,
} from '@builder.io/qwik'
import { Form } from '@builder.io/qwik-city'
import { useAuthSignout } from 'Accounts'

const Logout = component$(({
    returnTo,
}) => {

    const signOut = useAuthSignout()

    return <Form action={signOut}>
        <input
            type="hidden"
            name="callbackUrl"
            value={returnTo || '/'}
        />
        <Slot />
    </Form>
})

export default Logout
