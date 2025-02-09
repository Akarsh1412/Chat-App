import express from "express"
import dotenv from "dotenv"
import connectDB from "./config/database.js"
import userRoute from "./routes/userRoute.js"
import messageRoute from "./routes/messageRoute.js"
import cors from "cors"
import cookieParser from "cookie-parser"
import { app, io, server } from "./socket/socket.js"

dotenv.config();

const PORT = process.env.PORT;

//Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

const corsOption = {
    origin: "*",
    credentials: true,
}

app.use(cors(corsOption));

//Routes
app.use("/api/v1/user", userRoute);
app.use("/api/v1/message", messageRoute);

server.listen(PORT, () => {
    connectDB();
    console.log(`Server Live at port ${PORT}`);
});
