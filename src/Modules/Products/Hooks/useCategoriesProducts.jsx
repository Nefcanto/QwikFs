import { getFromCacheOrApi } from 'Base'

const useCategoriesProducts = async (count) => {
    const { hierarchiesProducts } = await getFromCacheOrApi(`/products/gethierarchiesproducts?locale=null&count=${count}`)
    return hierarchiesProducts
}

export default useCategoriesProducts
