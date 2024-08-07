import express, {Request, Response} from "express";
import cors from "cors";

import "dotenv/config";

const app = express();
app.use(express.json());

app.use(cors());

app.get("/test", async (req: Request, res: Response) => {
    res.send("Hello World");
})

app.listen(4000, () => {
    console.log("Server is running on port 4000");
})