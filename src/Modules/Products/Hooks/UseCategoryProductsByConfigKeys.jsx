import { getFromCacheOrApi } from 'Base'
import { useSystemConfig } from 'Configuration'

const useCategoryProductsByConfigKeys = async (configKeys) => {
    const { configs, getKeyFromValue } = await useSystemConfig()
    let csv = ''
    configKeys.forEach(key => csv += `,${configs[key] || ""}`)
    const configKeysCsv = configKeys.join(',')
    const products = await getFromCacheOrApi(`/products/getProductsByConfigKeys?configKeysCsv=${configKeysCsv}`)
    for (let product in products) {
        if (product === 'milliseconds') {
            continue
        }
        const key = getKeyFromValue(product)
        products[key] = products[product]
    }
    return products
}

export default useCategoryProductsByConfigKeys
