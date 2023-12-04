import express, { Application, Request, Response } from "express";
import cors from "cors";
import { UserRoutes } from "./app/config/modules/user/user.route";
const app: Application = express();

// parsers

app.use(express.json());
app.use(cors());

app.use("/api", UserRoutes);

const getAController = (req: Request, res: Response) => {
  const a = 10;
  res.send(a.toString());
};

app.get("/", getAController);

export default app;
