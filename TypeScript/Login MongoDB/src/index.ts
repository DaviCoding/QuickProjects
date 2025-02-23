import Fastify from "fastify";
import fastifyView from "@fastify/view";
import fastifyStatic from "@fastify/static";
import ejs from "ejs";
import dotenv from "dotenv";
import path from "path";
import UseRoutes from "./Routes/UserRoutes.ts";
import AuthRoutes from "./Routes/AuthRoutes.ts";
import fastifyFormbody from "@fastify/formbody";
import connectDB from "./Database/connect.ts";
import chalk from "chalk";
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

(async () => {
  try {
    await connectDB();
    app.listen({ port: Number(process.env.PORT) });
    console.log(
      "Link server:",
      chalk.underline(chalk.green(`http://127.0.0.1:${process.env.PORT}`))
    );
  } catch (error) {
    throw new Error(`Erro: ${error}`);
  }
})();
