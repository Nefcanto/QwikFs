const camelize = (text) => {
    if (!text) {
        return ""
    }
    if (!text.replace) {
        return ""
    }
    text = text.replace(/[^\w ]/g, '')
    return text.replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
        return index === 0 ? word.toLowerCase() : word.toUpperCase()
    }).replace(/\s+/g, '')
}

export default camelize
