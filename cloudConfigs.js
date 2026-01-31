// Cloud image storage service import
const cloudinaryLib = require("cloudinary").v2;

// Multer ke liye Cloudinary storage
const { CloudinaryStorage } = require("multer-storage-cloudinary");

// Cloudinary account config
cloudinaryLib.config({
    cloud_name: process.env.CLOUD_NAME,       // cloud name
    api_key: process.env.CLOUD_API_KEY,       // api key
    api_secret: process.env.CLOUD_API_SECRET, // api secret
});

// Multer storage engine (Cloudinary)
const cloudStorage = new CloudinaryStorage({
    cloudinary: cloudinaryLib,                // cloudinary instance
    params: {
        folder: "wanderlust_DEV",              // upload folder
        allowedFormats: ["jpg","jpeg","png","svg","ico"], // allowed files
    },
});

// Export for use in routes/controllers
module.exports = {
    cloudinary: cloudinaryLib, // image delete/update
    storage: cloudStorage,     // image upload
};
