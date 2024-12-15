import express from "express";
import cors from 'cors';
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import 'dotenv/config';
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";
import path from 'path';  // Using import now
const origin = process.env.origin
// app config*/
const app = express();
const port = 4000;



app.use(express.json());
//app.use(cors(corsOptions));
app.use(cors({
  
  origin: origin , // React frontend URL
  methods: ['GET', 'POST'], // Allowed methods (adjust as needed)
}))


// db connection
connectDB();

// api endpoints
app.use("/api/food", foodRouter);
app.use("/images", express.static('uploads'));
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

// Resolve the __dirname for ES modules

// Set up path for the frontend's dist folder
//const frontendDistPath = path.resolve(__dirname, '../frontend/dist');
const frontendDistPath = path.resolve('dist');

// Ensure the path is correctly resolved for serving the static files
app.use(express.static(frontendDistPath));

// All other routes should serve the React app's index.html for React Router to work
app.get('*', (req, res) => {
  // Make sure the path is absolute
  const indexPath = path.resolve(frontendDistPath, 'index.html');
  res.sendFile(indexPath);  // Send the absolute path to index.html
});

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
