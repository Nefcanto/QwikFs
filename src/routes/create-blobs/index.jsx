import { get } from 'Base'
import {
    writeFile,
    writeFileSync,
} from 'fs'

export const onPost = async (requestEvent) => {
    var data = await get("/blob/data")
    const {
        favicon,
        robotsTxt,
        sitemap,
    } = data

    if (favicon) {
        createFavicon(favicon)
    }
    if (sitemap) {
        createSiteMap(sitemap)
    }
    if (robotsTxt) {
        createRobotsTxt(robotsTxt)
    }

    requestEvent.json(
        200,
        {
            status: 'Successful',
            message: 'Blobs created!'
        }
    )
}

const createFavicon = (value) => {
    writeFile("public/favicon.ico", value, "base64", function (err) {
        console.log(err)
    })
}

const createSiteMap = (value) => {
    writeFileSync("public/sitemap.xml", value)
}

const createRobotsTxt = (value) => {
    writeFileSync("public/robots.txt", value)
}
