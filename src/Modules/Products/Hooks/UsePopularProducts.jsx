import { getFromCacheOrApi } from 'Base'

const usePopularProducts = async (count) => {
    const products = await getFromCacheOrApi(`/products/popularProducts?locale=null&count=${count}`)
    return products
}

export default usePopularProducts
