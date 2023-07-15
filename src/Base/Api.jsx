import axios from 'axios'
import https from 'https'

let apiUrl = import.meta.env.VITE_API_URL

if (import.meta.env.NODE_ENV === 'development') {
    const httpsAgent = new https.Agent({
        rejectUnauthorized: false,
    })
    axios.defaults.httpsAgent = httpsAgent
}

const axiosApi = axios.create({
    baseURL: apiUrl
})

axiosApi.interceptors.request.use(config => {
    config.headers['Accept'] = 'application/json'
    config.headers['X-Client'] = 'Qwik'
    // if (localStorage && localStorage.getItem('locale')) {
    //   config.headers['Locale'] = localStorage.getItem('locale')
    // }
    return config
})

axiosApi.interceptors.response.use(
    response =>
        response
    ,
    error => {
        if (apiUrl === undefined) {
            throw 'You have not defined the VITE_API_URL'
        }
        if (error.response === undefined) {
            throw error.message ? error.toString() : 'Unknown error'
        }
        if (error.response.status === 404) {
            console.log(error.response.data)
            console.log(error.response.headers)
            console.log(error.response.status)
            if (error.response.data?.code === "404") {
                throw error.response.data
            }
            else {
                throw `404\nService does not exist\n${error.request.path}\n${apiUrl}`
            }
        }
        if (error.response.status === 400 || error.response.status === 500) {
            var messages = ''
            var data = error.response.data
            if (typeof data !== "string") {
                for (var item in error.response.data) {
                    if (item.toLowerCase && item.toLowerCase() === 'type') {
                        continue
                    }
                    if (Array.isArray(data[item])) {
                        for (var i = 0; i < data[item].length; i++) {
                            messages += data[item][i] + "\n"
                        }
                    }
                    else if (typeof data[item] === 'object') {
                        console.log(data[item])
                    }
                    else {
                        messages += data[item] + "\n"
                    }
                }
            }
            else {
                messages = data
            }
            console.log(messages)
            throw messages
        }
    }
)

export async function get(url) {
    const path = url.split('?')[0]
    let query = new URLSearchParams()
    if (url.indexOf('?') > 0) {
        query = url.split('?')[1]
        query = new URLSearchParams(query)
    }
    const params = {}
    query.forEach((value, key) => params[key] = value)
    const start = new Date()
    console.log(`Getting ${import.meta.env.VITE_API_URL}${url} ...`)
    return await
        axiosApi.get(path, {
            params: params,
            crossDomain: true
        }).then(response => {
            const end = new Date()
            console.log(`Took ${end - start} milliseconds for ${import.meta.env.VITE_API_URL}${url}`)
            return response?.data
        }).catch(error => {
            if (error.error?.code === "404") {
                return { statusCode: 404, error }
            }
            return { statusCode: error?.response?.status ?? 500, error }
        })
}

export async function post(url, data) {
    return await axiosApi
        .post(url, { ...data })
        .then(response => response?.data)
}
