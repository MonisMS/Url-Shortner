
import { getShortUrl } from "../dao/short_url.js"
import { createShortUrlServiceWithoutUser } from "../services/shortUrl.service.js"
export const shortUrlGen = async (req,res) => {
    const {url} = req.body
   const shortUrl = await createShortUrlServiceWithoutUser(url)
res.send(process.env.APP_URL + shortUrl)
}

export const redirectFromShortUrl = async (req,res) => {
const {id} = req.params;
const url = await getShortUrl(id)
res.redirect(url)
}