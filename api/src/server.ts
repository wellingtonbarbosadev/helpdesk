import express from "express";
import { env } from "./config/env.js";
import { routes } from "./routes/index.js";
import { errorHandler } from "./utils/errorHandler.js";


export const app = express();

app.use(express.json());
app.use(routes);
app.use(errorHandler);

app.listen(env?.PORT, () => {
  console.log(`listening on port ${env?.PORT}`);
});
