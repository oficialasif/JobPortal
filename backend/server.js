import app from "./app.js";
import cloudinary from "cloudinary";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config(); // Load environment variables

// Enable CORS for all routes
app.use(cors({
  origin: "http://localhost:5173", // Change to your frontend URL
  credentials: true,
}));

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLIENT_NAME,
  api_key: process.env.CLOUDINARY_CLIENT_API,
  api_secret: process.env.CLOUDINARY_CLIENT_SECRET,
});

app.listen(process.env.PORT, () => {
  console.log(`Server running at port ${process.env.PORT}`);
});
