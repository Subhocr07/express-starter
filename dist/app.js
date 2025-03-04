import express from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import connectDB from "./config/db";
import routes from "./routes";
import errorHandler from "./middleware/error.middleware";
const app = express();
// Middleware
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());
app.use("/api", routes);
// Global Error Handler (must be placed at the end)
app.use(errorHandler);
connectDB();
export default app;
