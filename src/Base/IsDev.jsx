const isDev = () => {
    const { PROD } = import.meta.env
    return !PROD
}

export default isDev
