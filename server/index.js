import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import connectDB from "./mongodb/connect.js";
import userRouter from "./routes/user.routes.js";
import propertyRouter from "./routes/property.routes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.get("/", (req, res) => {
  res.send({ message: "hello world" });
});
app.use("/api/v1/users", userRouter);
app.use("/api/v1/properties", propertyRouter);

const startServer = async () => {
  const port = process.env.PORT || 8080;
  try {
    connectDB(process.env.MONGODB_URL);
    app.listen(port, () => console.log(`Server is running on port ${port}`));
  } catch (e) {
    console.log(e);
  }
};
startServer();
