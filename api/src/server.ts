import express from "express";
import { env } from "./shared/config/env.js";
import { routes } from "./routes/index.js";
import { errorHandler } from "./shared/utils/errorHandler.js";

export const app = express();

app.use(express.json());
app.use(routes);
app.use(errorHandler);

app.listen(env?.PORT, () => {
  console.log(`listening on port ${env?.PORT}`);
});
