import { Product } from 'Orders'

const Item = ({
    title
}) => {
    return <div
        class="item"
    >
        <Product />
        Item - {title}
    </div>
}

export default Item
