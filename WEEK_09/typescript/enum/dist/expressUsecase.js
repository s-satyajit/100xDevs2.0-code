import express, {} from 'express';
const app = express();
const PORT = 8080;
var ResponseStatus;
(function (ResponseStatus) {
    ResponseStatus[ResponseStatus["Error"] = 500] = "Error";
    ResponseStatus[ResponseStatus["NotFound"] = 404] = "NotFound";
    ResponseStatus[ResponseStatus["Success"] = 200] = "Success";
})(ResponseStatus || (ResponseStatus = {}));
app.get('/', (req, res) => {
    res.status(ResponseStatus.Success).json({ msg: "System Online" });
});
app.get('/users', (req, res) => {
    const userId = req.query.userId;
    if (!userId)
        res.status(ResponseStatus.Error).json({ error: "userid not found" });
    res.status(ResponseStatus.Success).json({ status: "active" });
});
app.listen(PORT, () => {
    console.log(`[SERVER]: API running on port: ${PORT}`);
});
//# sourceMappingURL=expressUsecase.js.map