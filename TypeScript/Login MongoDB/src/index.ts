import Fastify from "fastify";
import fastifyView from "@fastify/view";
import fastifyStatic from "@fastify/static";
import ejs from "ejs";
import dotenv from "dotenv";
import path from "path";
import UseRoutes from "./Routes/UserRoutes.ts";
import AuthRoutes from "./Routes/AuthRoutes.ts";
import fastifyFormbody from "@fastify/formbody";
dotenv.config();

const app = Fastify();

app.register(fastifyView, {
  engine: {
    ejs,
  },
  root: "./src/View",
});

app.register(fastifyStatic, {
  root: path.join(process.cwd(), "/src/public"),
});

app.register(fastifyFormbody);

app.register(UseRoutes);
app.register(AuthRoutes);

app.listen({ port: Number(process.env.PORT) }, () => {
  console.log(`http://localhost:${Number(process.env.PORT)}`);
});
