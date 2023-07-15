const Tags = ({
    entityType,
    tags,
}) => {

    return <div class="tags">
        {
            tags?.map(tag => <div class="tag">
                {tag.name}
            </div>)
        }
    </div>
}

export default Tags
