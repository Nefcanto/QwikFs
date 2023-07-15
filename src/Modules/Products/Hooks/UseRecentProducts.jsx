import { getFromCacheOrApi } from 'Base'

const useRecentProducts = async (count) => {
    const products = await getFromCacheOrApi(`/products/latestProducts?locale=null&count=${count}`)
    return products
}

export default useRecentProducts
