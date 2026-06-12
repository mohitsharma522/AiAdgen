import "./config/instrument.mjs"
import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv"
import { clerkMiddleware } from "@clerk/express";
import clerkWebhooks from "./controllers/clerk.js";
import * as Sentry from "@sentry/node"
import userRouter from "./routes/userRoutes.js";
import projectRouter from "./routes/projectRoutes.js";

const app = express();

app.use(clerkMiddleware())


// middleware
app.use(cors())

app.post('/api/clerk', express.raw({ type: 'application/json' }), clerkWebhooks)

app.use(express.json());
app.use(clerkMiddleware())

dotenv.config()
const PORT = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response)=> {
   res.send("sever is live");
})
app.use("/api/user", userRouter)
app.use("/api/project", projectRouter)




app.get("/debug-sentry", function mainHandler(req, res) {
  throw new Error("My first Sentry error!");
});


// The error handler must be registered before any other error middleware and after all controllers
Sentry.setupExpressErrorHandler(app);

app.listen(PORT, ()=> {
    console.log(`server is running at http://localhost:${PORT}`);
})

