import { getFromCacheOrApi } from 'Base'

const isGone = (url: any, goneUrls: any) => {
    if (goneUrls?.find((i: any) => i.url === url)) {
        return true
    }
    return false
}

const getLiteralRedirection = (url: any, literalRedirects: any) => {
    const literalRedirection = literalRedirects?.find((i: any) => {
        if (decodeURI(i.oldUrl.toLowerCase()) == decodeURI(url.toLowerCase())) {
            const log = [
                {
                    decodedIncomingUrl: url
                },
                {
                    doubleDecodedIncomingUrl: decodeURI(url)
                },
                {
                    oldUrl: i.oldUrl
                },
                {
                    decodedOldUrl: decodeURI(i.oldUrl)
                },
                {
                    doubleDecodedOldUrl: decodeURI(decodeURI(i.oldUrl))
                },
                {
                    newUrl: i.newUrl
                },
                {
                    decodedNewUrl: decodeURI(i.newUrl)
                },
                {
                    doubleDecodedNewUrl: decodeURI(decodeURI(i.newUrl))
                }
            ]
            console.log(log)
            return true
        }
        return false
    })
    return literalRedirection || false
}

const getRegexRedirected = (url: any, regexRedirects: any) => {
    const regexRedirect = regexRedirects?.find((i: any) => new RegExp(i.oldUrl).test(url))
    return regexRedirect || false
}

const checkRedirection = (url: any, redirects: any) => {
    const { goneUrls, literalRedirects, regexRedirects } = redirects
    if (isGone(url, goneUrls)) {
        return {
            isRedirected: true,
            redirection: {
                statusCode: 410,
                newUrl: url
            }
        }
    }
    const literalRedirection = getLiteralRedirection(url, literalRedirects)
    if (literalRedirection) {
        return {
            isRedirected: true,
            redirection: {
                statusCode: literalRedirection.code,
                newUrl: literalRedirection.newUrl
            }
        }
    }
    const regexRedirection = getRegexRedirected(url, regexRedirects)
    if (regexRedirection) {
        return {
            isRedirected: true,
            redirection: {
                statusCode: regexRedirection.code,
                newUrl: url.replace(new RegExp(decodeURI(regexRedirection.oldUrl)), decodeURI(regexRedirection.newUrl))
            }
        }
    }
}

export const onRequest = async ({
    redirect,
    html,
    url,
}: {
    redirect: any,
    html: any,
    url: any
}) => {

    const {
        href,
        origin
    } = url
    const data = await getFromCacheOrApi("/redirect/data")
    const incomingUrl = decodeURI(href.replace(origin, ''))
    const redirectionResult = checkRedirection(incomingUrl, data)
    if (redirectionResult?.isRedirected) {
        console.log(`Redirection result for`, incomingUrl, redirectionResult)
        if (redirectionResult.redirection.statusCode === 410) {
            html(410, '<style>h1{font-size:50px}body{text-align:center;padding:200px;background-color:#0078ae;font:20px Helvetica,sans-serif;color:#fff}article{display:block;text-align:left;width:480px;margin:0 auto}a{color:#f1592a;font-weight:700}</style><article><h1>410 Gone</h1> <p>The resource requested is no longer available and will not be available again.</p><a href="/">back to Homepage</a></article>')
            return
        }
        throw redirect(redirectionResult.redirection.statusCode, new URL(redirectionResult.redirection.newUrl, origin))
    }
}
