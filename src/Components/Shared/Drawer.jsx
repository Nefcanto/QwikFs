import { Backdrop } from 'Shared'
const Drawer = () => {

    return <>
        {isOpen && <Backdrop click={toggleMenu} />}
        <div class={`drawer lg:hidden w-[90%] max-w-[400px] fixed bg-white top-0 e-0  shadow-2xl h-[100vh] z-50  ${isOpen ? "translate-x-0" : "translate-x-full"} transition duration-300`}>
            <div class='flex items-center justify-between bg-slate-100 p-4'>
                {/* <Link href="/">
                    <Image
                        containerclass="h-14 w-14 relative"
                        class="object-contain"
                        src={logo?.relatedItems?.fileUrl}
                        alt={"logo"}
                        priority
                    />
                </Link>
                <div onClick={toggleMenu}>
                    <CloseIcon class="w-7 h-7" />
                </div> */}
            </div>
            <div class='px-4 pt-5 pb-20 overflow-y-auto h-full'>
                {/* {menuItems?.map((item) => <MenuExpand
                    singleMenu={item}
                    key={item.id} />
                )} */}
            </div>
        </div>
    </>
}

export default Drawer
