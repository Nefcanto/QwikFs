import { getFromCacheOrApi } from 'Base'

const useForm = async (key, query) => {

    const locale = query?.get('locale')

    const form = await getFromCacheOrApi(`/form/get?key=${key}&locale=${locale}`)

    return form
}

export default useForm
