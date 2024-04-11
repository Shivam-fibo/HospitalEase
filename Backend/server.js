import app from './app.js'
// cloudinary 
import cloudinary from 'cloudinary'

cloudinary.v2.config({
    cloud_name : process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secreat: process.env.CLOUDINARY_API_SECRET
})

app.listen(process.env.PORT, () => {
    console.log(`Server is reading on port ${process.env.PORT}` )
})