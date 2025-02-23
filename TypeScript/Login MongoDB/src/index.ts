import Fastify from "fastify";
import fastifyView from "@fastify/view";
import fastifyStatic from "@fastify/static";
import ejs from "ejs";
import dotenv from "dotenv";
import path from "path";
import UseRoutes from "./Routes/UserRoutes.ts";
import AuthRoutes from "./Routes/AuthRoutes.ts";
import fastifyFormbody from "@fastify/formbody";
import db from "./Database/connect.ts";
dotenv.config();

import bcrypt from "bcrypt";

async function Encrypt(password: string): Promise<string> {
  let salt = bcrypt.genSaltSync(10);
  let hash = bcrypt.hashSync(password, salt);

  return hash;
}
console.log(Encrypt("1234"));

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
    await db.connect();
    await db.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
    app.listen({ port: Number(process.env.PORT) }, () => {
      console.log(
        `Server is running: http://localhost:${Number(process.env.PORT)}`
      );
    });
  } catch (err) {
    console.log(err);
  }
})();
