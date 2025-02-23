import express, { json } from "express";
import cors from "cors";
import routes from "./routes.js";

const app = express();
app.use(cors());
app.use(json());
app.get("/", (response, request) => {
  return request.redirect("/api");
});
app.use("/api", routes);

const port = process.env.PORT || 3000;

// 🔥 Inicia o servidor
app.listen(port, () => {
  console.log(`✅ API rodando na porta ${port}`);
});
