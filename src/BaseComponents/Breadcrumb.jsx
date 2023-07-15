const DefaultBreadcrumb = ({
    breadcrumb,
    itemClass,
    lastItemClass,
    seperator,
    wrapperClass,
}) => {

    return <>
        <div class={wrapperClass || "w-full px-4 sm:px-6 md:px-15 py-3 flex items-center text-sm overflow-x-auto"}>
            {
                breadcrumb?.map((item, index) => {
                    return index === breadcrumb.length - 1
                        ?
                        <span class={lastItemClass || 'min-w-fit whitespace-nowrap'}>{item?.text}</span>
                        :
                        <>
                            <a
                                href={item?.link}
                                class={itemClass || 'min-w-fit whitespace-nowrap'}
                                key={index}
                            >
                                {item?.text}
                            </a>
                            <span class={`${breadcrumb.length == index + 1 && ' hidden '}`}>
                                {seperator || <KeyboardArrowLeft class='h-8 w-8' />}
                            </span>
                        </>

                }
                )
            }
        </div>
    </>
}

export default DefaultBreadcrumb
