import  multer from 'multer';
import  cloudinary from "./cloudinary.service.js";
import pkg from 'multer-storage-cloudinary';
const { CloudinaryStorage } = pkg;


const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "uploads",
    allowed_formats: ["jpeg", "png", "jpg","mpv","mp4"],
    resource_type: 'auto',
  },
});

export default upload=multer({storage});
