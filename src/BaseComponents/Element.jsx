import * as Components from 'RichTextComponents'

const Element = ({
    attributes,
    children,
    text,
    type,
    ...rest
}) => {

    if (type === 'component') {
        const { componentName } = rest
        const Component = Components[componentName]
        const transformedAttributes = attributes.reduce((attrs, current) => {
            attrs[current.name] = current.value
            return attrs
        }, {})
        return <Component {...transformedAttributes} {...rest} />
    }

    const {
        blockQuote,
        h1,
        h2,
        h3,
        h4,
        img,
        ul,
        ol,
        li,
        p,
        a,
    } = rest

    const log = () => {
        console.table({
            attributes: JSON.stringify(attributes),
            children: JSON.stringify(children),
            rest: JSON.stringify(rest),
            text,
            type,
        })
    }

    // log()

    if (text) {
        return <span {...attributes} {...rest} class={`${Object.getOwnPropertyNames(rest).reduce((a, b) => `${a} ${b}`, '')} `}>{text}</span>
    }

    const childElements = children?.map(child => {
        return <Element {...child} />
    })

    switch (type) {
        case 'block-quote':
            return <blockquote
                class={blockQuote || "text-xl italic font-semibold text-gray-900 dark:text-white"}
                {...attributes}
            >
                {childElements}
            </blockquote>
        case 'bulleted-list':
            return <ul
                class={ul || "max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400"}
                {...attributes}
            >
                {childElements}
            </ul>
        case 'heading-one':
            return <h1
                class={h1 || "text-4xl font-black dark:text-white"}
                {...attributes}
            >
                {childElements}
            </h1>
        case 'heading-two':
            return <h2
                class={h2 || "text-4xl font-bold dark:text-white"}
                {...attributes}
            >
                {childElements}
            </h2>
        case 'heading-three':
            return <h3
                class={h3 || "text-3xl font-bold dark:text-white"}
                {...attributes}
            >
                {childElements}
            </h3>
        case 'heading-four':
            return <h4
                class={h4 || "text-2xl font-bold dark:text-white"}
                {...attributes}
            >
                {childElements}
            </h4>
        case 'list-item':
            return <li
                class={li || ""}
                {...attributes}
            >
                {childElements}
            </li>
        case 'numbered-list':
            return <ol
                class={ol || "max-w-md space-y-1 text-gray-500 list-decimal list-inside dark:text-gray-400"}
                {...attributes}
            >
                {childElements}
            </ol>
        case 'list-entity':
            return <li
                class={li || "mx-2"}
                {...attributes}
            >
                {childElements}
            </li>
        case 'paragraph':
            return <p
                class={p || "dark:text-white"}
                {...attributes}
            >
                {childElements}
            </p>
        case 'image':
            return <img
                class={img || "h-auto max-w-full"}
                src={rest.url}
                alt={rest.alt}
                title={rest.title}
                {...attributes}
            >
                {childElements}
            </img>
        case 'link':
            return <a
                class={a || "font-medium text-blue-600 dark:text-blue-500 hover:underline"}
                href={rest.href}
                target={rest.target}
                download={rest.isDownload}
                {...attributes}
            >
                {childElements}
            </a>
        default:
            return <span
                data-nonValidElement
                {...attributes}>{childElements}</span>
    }
}

export default Element
