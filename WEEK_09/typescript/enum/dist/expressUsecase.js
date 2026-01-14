import express, {} from 'express';
var ResponseStatus;
(function (ResponseStatus) {
    ResponseStatus[ResponseStatus["Success"] = 200] = "Success";
    ResponseStatus[ResponseStatus["NotFound"] = 404] = "NotFound";
    ResponseStatus[ResponseStatus["Error"] = 500] = "Error";
})(ResponseStatus || (ResponseStatus = {}));
const app = express();
const PORT = 8080;
app.get("/", (req, res) => {
    res.status(ResponseStatus.Success).json({ msg: "System Online" });
});
app.get("/users", (req, res) => {
    const userId = req.query.userId;
    if (!userId)
        res.status(ResponseStatus.NotFound).json({ msg: "UserId not found" });
    res.status(ResponseStatus.Success).json({ server: "active" });
});
app.listen(PORT, () => {
    console.log(`[SERVER]: API  running on port: ${PORT}`);
});
//# sourceMappingURL=expressUsecase.js.map