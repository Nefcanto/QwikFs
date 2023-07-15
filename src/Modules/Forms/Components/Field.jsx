import {
    component$,
    Slot,
} from '@builder.io/qwik'

const Field = component$(({
    id,
    lable,
}) => {
    return <>
        {lable && <lable id={id}>{lable}</lable>}
        <Slot />
    </>

})

export default Field