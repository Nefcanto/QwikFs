const Download = ({
    ctaText,
    description,
    title,
    url,
}) => {
    return <div className="bg-gray-300 rounded-lg max-w-xs shadow-lg px-4 py-1 text-center mx-auto">
        <h6 className='text-center my-0'>{title}</h6>
        <p className='text-justify text-sm leading-7'>{description}</p>
        <div className='flex gap-x-2 items-center jusitfy-center w-fit mx-auto bg-gray-800 px-2 py-1 rounded-lg my-2 group'>
            <a
                target="_blank"
                download
                href={url}
                className='text-white group-hover:text-green-200 transition duration-200'
            >
                {ctaText}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="48"
                    viewBox="0 -960 960 960"
                    width="48"
                >
                    <path d="M220-160q-24 0-42-18t-18-42v-143h60v143h520v-143h60v143q0 24-18 42t-42 18H220Zm260-153L287-506l43-43 120 120v-371h60v371l120-120 43 43-193 193Z" />
                </svg>
            </a>
        </div>
    </div>
}

export default Download
