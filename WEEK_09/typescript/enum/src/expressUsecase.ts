import express, {
  type Request,
  type Response,
  type Application,
} from "express";

enum ResponseStatus {
  Success = 200,
  NotFound = 404,
  Error = 500,
}

const app: Application = express();
const PORT: number = 8080;

app.get("/", (req: Request, res: Response) => {
  res.status(ResponseStatus.Success).json({ msg: "System Online" });
});

app.get("/users", (req: Request, res: Response) => {
  const userId = req.query.userId;
  if (!userId)
    res.status(ResponseStatus.NotFound).json({ msg: "UserId not found" });
  res.status(ResponseStatus.Success).json({ server: "active" });
});

app.listen(PORT, () => {
  console.log(`[SERVER]: API  running on port: ${PORT}`);
});
