import { FastifyInstance } from "fastify";
import LoginController from "../Controller/LoginController.ts";

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

      new LoginController(name, email, password, 2);
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
