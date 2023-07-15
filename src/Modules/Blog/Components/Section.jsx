const Section = ({
    children,
    title,
}) => {
    return <div class="mb-12 max-w-lg">
        <div class="text-2xl font-bold drop-shadow capitalize text-slate-800 ">
            {title}
        </div>
        <div class="h-[0.25px] bg-gray-200 mt-2 mb-6 text-gray-700" />
        {children}
    </div>
}

export default Section
