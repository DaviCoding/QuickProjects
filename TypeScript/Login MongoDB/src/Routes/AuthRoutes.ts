import { FastifyInstance } from "fastify";
import UserController from "../Controller/UserController.ts";

interface LoginRequest {
  name: string;
  email: string;
  password: string;
}

export default async function Auth(app: FastifyInstance) {
  app.post(
    "/authenticate/login",
    {
      schema: {
        body: {
          type: "object",
          properties: {
            name: { type: "string", minLength: 1 },
            email: { type: "string", format: "email", minLength: 1 },
            password: { type: "string", minLength: 1 },
          },
          required: ["name", "email", "password"],
          additionalProperties: false,
        },
      },
    },
    async (request, reply) => {
      const { name, email, password } = request.body as LoginRequest;
      if (!name || !email || !password) return reply.redirect("/login");

      let user = await new UserController(name, email, password).LoginAccount();
      user.length == 0 ? reply.redirect("/login") : (user = user);

      reply.status(200).send({ user });

      reply.redirect("/profile");
    }
  );

  app.post(
    "/authenticate/register",
    {
      schema: {
        body: {
          type: "object",
          properties: {
            name: { type: "string", minLength: 1 },
            email: { type: "string", format: "email", minLength: 1 },
            password: { type: "string", minLength: 1 },
          },
          required: ["name", "email", "password"],
          additionalProperties: false,
        },
      },
    },
    async (request, reply) => {
      const { name, email, password } = request.body as LoginRequest;
      if (!name || !email || !password) return reply.redirect("/login");

      await new UserController(name, email, password).CreateAccount();

      reply.status(200).redirect("/profile");
    }
  );

  app.setErrorHandler((error, request, reply) => {
    console.log(error, request, reply);
    if (error.validation) {
      // Se o erro for de validação (schema), redireciona o usuário
      return reply.redirect("/login"); // Redireciona para o formulário de registro
    }

    // Para outros tipos de erro, trata normalmente
    reply.send(error);
  });
}
