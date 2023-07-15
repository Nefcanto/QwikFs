import {
    $,
    component$,
    Slot,
    useSignal,
} from '@builder.io/qwik'
import { Form } from '@builder.io/qwik-city'
import { useAuthSignin } from 'Accounts'

const Login = component$(({
    returnTo,
}) => {

    const progress = useSignal(false)
    const signIn = useAuthSignin()

    const login = $(() => {
        progress.value = true
        signIn.submit({
            providerId: 'keycloak',
            options: {
                callbackUrl: returnTo || '/'
            }
        })
    })

    return <div onClick$={login}>
        <Slot />
    </div>

    return <Form action={signIn}>
        <input
            type="hidden"
            name="providerId"
            value="keycloak"
        />
        <input
            type="hidden"
            name="options.callbackUrl"
            value={returnTo || '/'}
        />
        <Slot />
    </Form>
})

export default Login
