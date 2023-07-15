const Links = ({
    items,
    title,
}) => {
    return <>
        <div class="col-span-3 sm:col-span-1 ">
            <b class="block mb-4">
                {title}
            </b>
            <ul>

                {
                    items?.map(item => <>
                        <li class='mb-2'>
                            <a
                                class="text-md text-paydar-color31 hover:text-paydar-color1 transition-all"
                                href={item?.link}
                            >
                                {item?.text}
                            </a>
                        </li>
                    </>)
                }
            </ul>
        </div>
    </>
}

export default Links
