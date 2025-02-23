import { FastifyInstance } from "fastify";

export default async function UserRoutes(app: FastifyInstance) {
  app.get("/", async (request, reply) => {
    return reply.status(200).view("index");
  });

  app.get("/login", async (request, reply) => {
    return reply.status(200).view("login");
  });

  app.get("/profile", async (request, reply) => {
    return reply.status(200).view("profile");
  });
}
