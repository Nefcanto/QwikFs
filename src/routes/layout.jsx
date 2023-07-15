import {
    component$,
    Slot,
} from '@builder.io/qwik'
import { routeLoader$ } from '@builder.io/qwik-city'
import { useBranding } from 'Configuration'
import { useGlobalization } from 'Globalization'
import { useLayout } from 'Contents'
import { useMenu } from 'Navigation'
import {
    Footer,
    Header,
} from 'Shared'

const getData = routeLoader$(async ({
    pathname,
    query,
    redirect,
    ...rest
}) => {
    if (pathname === '/') {
        // throw redirect(302, 'blog')
    }
    const globalization = await useGlobalization(query)
    const layout = await useLayout('main', query)
    const menuData = await useMenu(query)
    const branding = await useBranding(query)
    const totalData = {
        ...layout,
        ...menuData,
        ...globalization,
        ...branding,
    }
    return totalData
})

const Layout = component$(() => {

    const data = getData().value

    return <div
        dir={data.currentLocale.isRtl ? 'rtl' : 'ltr'}
        class="scroll-smooth"
    >
        <Header {...data} />
        <Slot />
        <Footer {...data} />
    </div>
})

export default Layout

const head = ({ resolveValue }) => {
    const data = resolveValue(getData)
    const {
        brand,
        slogan,
    } = data

    return {
        title: `${brand} - ${slogan}`
    }
}

export { head }
