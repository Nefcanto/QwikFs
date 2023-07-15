import { component$ } from '@builder.io/qwik'
import Field from './Field'

const LongText = component$(({
    class: style,
    modelBind,
    placeholder,
    property,
    ...rest
}) => {
    return <>
        <Field {...rest}>
            <textarea               
                rows="6"
                class={style}
                placeholder={placeholder}
                value={modelBind.value[property.toLowerCase()]}
                onInput$={(e) => modelBind.value[property.toLowerCase()] = e.target.value}
            >
            </textarea>
        </Field>
    </>
})

export default LongText
