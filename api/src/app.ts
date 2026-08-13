import type { Request, Response } from "express";
import { env } from "./config/env.js";
import { app } from "./server.js";

app.listen(env?.PORT, () => {
  console.log(`listening on port ${env?.PORT}`);
});

