const useSections = (data) => {
    const sections = data.sections || data
    const result = {}
    for (const section in sections) {
        const { key, ...rest } = sections[section]
        result[key] = rest
    }
    return result
}

export default useSections
