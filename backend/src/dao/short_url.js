
import shortUrl from "../models/shortUrl.model.js"
import urlSchema from "../models/shortUrl.model.js"
import { ConflictError } from "../utils/errorHandler.js"
export const saveShortUrl = async (shortUrl,longUrl,userId) => {
   try{
    const newUrl = new urlSchema ({

        full_url : longUrl,
        shortUrl : shortUrl
    })
    if(userId){
        newUrl.user = userId    
    }
    await newUrl.save()
}catch(err){
    throw new ConflictError(err)
}
}
export const getShortUrl = async (shortUrl) => {
    return await urlSchema.findOneAndUpdate({shortUrl:shortUrl},{$inc:{clicks:1}})
}