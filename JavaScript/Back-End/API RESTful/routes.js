import { Router } from "express";
import users from "./users.json" assert { type: "json" };
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = Router();

router.get("/", (Request, Resolve) => {
  return Resolve.status(200).sendFile(path.join(__dirname, "index.html"));
});

router.get("/v1/users", (Request, Response) => {
  return Response.status(200).json({
    status: 200,
    message: "Lista de usuários",
    data: users,
  });
});

router.delete("/v1/users/:id", (Request, Response) => {
  const userIndex = users.findIndex(
    (u) => u.id === parseInt(Request.params.id)
  );
  if (userIndex === -1) {
    return Response.status(404).json({
      status: 404,
      message: "Usuário não encontrado",
    });
  }

  users.splice(userIndex, 1);
  return Response.status(200).json({
    status: 200,
    message: "Usuário removido com sucesso",
  });
});

router.put("/v1/users/:id", (Request, Response) => {
  const user = users.find((u) => u.id === parseInt(Request.params.id));
  if (!user) {
    return Response.status(404).json({
      status: 404,
      message: "Usuário não encontrado",
    });
  }

  const { name, email, age } = Request.body;
  user.name = name || user.name;
  user.email = email || user.email;
  user.age = age || user.age;

  return Response.status(200).json({
    status: 200,
    message: "Usuário atualizado",
    data: user,
  });
});

router.post("/v1/users", (Request, Response) => {
  const { name, email, age } = Request.body;
  if (!name || !email || !age) {
    return Response.status(400).json({
      status: 400,
      message: "Todos os campos são obrigatórios",
    });
  }
  const newUser = { id: users.length + 1, name, email, age };
  users.push(newUser);
  return Response.status(201).json({
    status: 201,
    message: "Usuário criado com sucesso",
    data: newUser,
  });
});

export default router;
