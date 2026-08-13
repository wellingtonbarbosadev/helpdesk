import { app } from "../server.js";
import { usersRouter } from "./usersRoutes.js";

app.use("/users", usersRouter);
