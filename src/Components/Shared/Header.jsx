import { Menu } from 'Svg'
import {
    DesktopMenu,
    MobileMenu,
} from 'Shared'

const Header = ({
    loginRegister,
    logo,
    menuItems,
}) => {

    return <>
        <header class='bg-paydar-color3'>
            <div class="max-w-7xl mx-auto px-3 xl:px-0 py-5 flex items-center realative">
                <span onClick$={() => trigger('menuClicked')}>
                    <Menu
                        class='w-10 h-10 stroke-[1.7px] lg:hidden cursor-pointer'
                    />
                </span>

                <a
                    href="/"
                    class='hidden lg:block w-[40px]'>
                    <span
                        dangerouslySetInnerHTML={logo?.logoSvg}
                        class='w-full aspect-[1/.3]'
                    />
                </a>

                <DesktopMenu menuItems={menuItems} />
                <MobileMenu menuItems={menuItems} />

                <div class="ms-auto ">
                    <a
                        href={loginRegister?.link}
                        class='rounded-3xl px-5 py-2 bg-paydar-color2 text-white hover:rounded-md transition-all'>
                        {loginRegister?.text}
                    </a>

                </div>
            </div>
        </header>
    </>

}

export default Header
