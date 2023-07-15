import { component$ } from '@builder.io/qwik'
import Field from './Field'

const Text = component$(({
    class: style,
    modelBind,
    placeholder,
    property,
    ...rest
}) => {
    return <>
        <Field {...rest}>
            <input
                type="text"
                class={style}
                placeholder={placeholder}
                value={modelBind.value[property.toLowerCase()]}
                onInput$={(e) => modelBind.value[property.toLowerCase()] = e.target.value}
            />
        </Field>
    </>
})

export default Text
