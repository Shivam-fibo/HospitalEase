import app from './app.js'
// cloudinary 


app.listen(process.env.PORT, () => {
    console.log(`Server is reading on port ${process.env.PORT}` )
})