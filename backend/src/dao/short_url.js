
import shortUrl from "../models/shortUrl.model.js"
import urlSchema from "../models/shortUrl.model.js"
export const saveShortUrl = async (shortUrl,longUrl,userId) => {
     const newUrl = new urlSchema ({

        full_url : longUrl,
        shortUrl : shortUrl
    })
    if(userId){
        newUrl.user = userId    
    }
    newUrl.save()
}
export const getShortUrl = async (shortUrl) => {
    return await urlSchema.findOne({shortUrl:shortUrl})
}