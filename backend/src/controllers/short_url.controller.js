
import { getShortUrl } from "../dao/short_url.js"
import { createShortUrlServiceWithoutUser } from "../services/shortUrl.service.js"
import wrapAsync from "../utils/tryCatchWrapper.js"
export const shortUrlGen =wrapAsync( async (req,res,next) => {
    
    const {url} = req.body
   const shortUrl = await createShortUrlServiceWithoutUser(url)
res.send(process.env.APP_URL + shortUrl)


next(err)

})
export const redirectFromShortUrl = wrapAsync(async (req,res) => {
try {const {id} = req.params;
const url = await getShortUrl(id)
res.redirect(url.full_url)
}catch(err){
    next(err)
}
})