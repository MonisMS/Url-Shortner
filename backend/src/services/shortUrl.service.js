import { generateNanoId } from "../utils/helper.js"
import { saveShortUrl } from "../dao/short_url.js"
import { getShortUrl } from "../dao/short_url.js"

export const createShortUrlServiceWithoutUser = async (url) => {
const shortUrl = generateNanoId(7)
await saveShortUrl(shortUrl,url)
    return shortUrl
}
export const createShortUrlServiceWithUser = async (url,userId) => {
const shortUrl = await generateNanoId(7)
await getShortUrl(shortUrl.url)
    return shortUrl
}