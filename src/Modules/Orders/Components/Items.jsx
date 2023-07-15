import { Item } from 'Orders'

const Items = ({
    items
}) => {
    return <div
        class='item'
    >
        {
            items?.map(item => <Item {...item} />)
        }
    </div>
}

export default Items
