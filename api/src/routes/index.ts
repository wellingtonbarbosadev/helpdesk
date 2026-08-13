import { app } from "../server.js";
import { usersRouter } from "./usersRoutes.js";

app.get("/", (response) => response.body("teste"));
app.use("/users", usersRouter);
