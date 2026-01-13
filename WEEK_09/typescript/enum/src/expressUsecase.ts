import express, {type Request, type Response, type Application} from 'express';

const app: Application = express();
const PORT: number = 8080;

enum ResponseStatus {
    Error = 500,
    NotFound = 404,
    Success = 200
}

app.get('/', (req: Request, res: Response) => {
    res.status(ResponseStatus.Success).json({msg: "System Online"});
})

app.get('/users', (req: Request, res: Response) => {
    const userId = req.query.userId;
    if(!userId)
        res.status(ResponseStatus.Error).json({error: "userid not found"});
    res.status(ResponseStatus.Success).json({status: "active"});
})

app.listen(PORT, () => {
    console.log(`[SERVER]: API running on port: ${PORT}`);
})