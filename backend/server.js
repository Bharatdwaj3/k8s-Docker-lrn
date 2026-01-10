import express from 'express';
import cors from "cors";
import cookieParser from "cookie-parser";

import { dbMiddleware } from "./src/middleware/index.js";
import {
  writerRoutes,
  userRoutes,
  readerRoutes,
  contentRoutes,
} from "./src/routes/index.js";
import { DB_PORT } from "./src/config/env.config.js";
import { connectDB } from "./src/config/db.config.js";
import morganConfig from "./src/config/morgan.config.js";

const app = express();

connectDB();
app.listen(DB_PORT, () => console.log("Server Started at port : ", DB_PORT));

app.use(morganConfig);
app.use(express.urlencoded({ extended: true, limit: "8kb" }));

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => res.send("Server ready"));

app.use("/api/user", userRoutes);
app.use("/api/user/reader", readerRoutes);
app.use("/api/user/writer", writerRoutes);
app.use("/api/content", contentRoutes);

app.use(dbMiddleware);
