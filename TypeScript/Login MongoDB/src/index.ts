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
    // Connect the client to the server	(optional starting in v4.7)
    await db.connect();
    // Send a ping to confirm a successful connection
    await db.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
    console.table(`Database name: ${db.options.appName}`);
    app.listen({ port: Number(process.env.PORT) }, () => {
      console.log(
        `Server is running: http://localhost:${Number(process.env.PORT)}`
      );
    });
  } finally {
    // Ensures that the client will close when you finish/error
    await db.close();
  }
})().catch(console.dir);
