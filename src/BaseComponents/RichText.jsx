import { Element } from 'Base'

const RichText = ({
    content,
    ...rest
}) => {

    const items = content && JSON.parse(content)

    return <div
        class={"richText " + (rest.class || "")}
    >
        {
            items?.map(item => <Element
                {...item}
                {...rest}
            />)
        }
    </div>
}

export default RichText
