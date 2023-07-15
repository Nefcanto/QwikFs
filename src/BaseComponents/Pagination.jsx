const Pagination = ({
    container,
    count,
    first,
    goTo,
    last,
    link,
    links,
    metadata,
    next,
    previous,
    size,
}) => {
    const linkClass = ' cursor-pointer ' + (link || "h-8 px-4 ")
    const {
        from,
        hasData,
        hasMore,
        pageNumber,
        pagesCount,
        pageSize,
        to,
        totalCount,
    } = metadata
    return <div class={container || ""}>
        {
            size && <div>size</div>
        }
        <div class={links || ""}>
            {first && <span class={first + linkClass}></span>}
            {previous && <span class={previous + linkClass}></span>}
            {[...Array(count || 5).keys()].map((i, index) => <span class={linkClass} key={index}>{i + 1}</span>)}
            {next && <span class={next + linkClass}></span>}
            {last && <span class={last + linkClass}></span>}
        </div>
        {
            goTo && <div>go to</div>
        }
    </div>
}

export default Pagination
