const env = (key) => {
    if (!key) {
        return `UNDEFINED_KEY`
    }
    key = `VITE_${key}`
    const value = import.meta.env[key]
    if (!value) {
        console.error('Non existing key in the environment', key)
        return ''
    }
    if (value.endsWith('/')) {
        throw 'Do not end URLs with slash in environment files'
    }
    return value
}

export default env
