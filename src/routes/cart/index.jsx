import { component$ } from '@builder.io/qwik'
import { Cart } from 'Orders'

const CartPage = component$(() => {

    let RunnableCart = null
    // try {
    //     const { Cart: TempLayout } = import('OrdersParts').catch(reason => console.error(reason)) || {}
    //     RunnableLayout = TempLayout
    // } catch (error) {
    //     console.error(error)
    // }

    return RunnableCart
        ?
        <RunnableCart />
        :
        <Cart />
})

export default CartPage
