const express = require("express");
const cors = require("cors");
const users = require("./users");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/v1/time", (req, res) => {
  return res.status(200).json({
    status: 200,
    message: "Hora atual do servidor",
    data: {
      timestamp: Date.now(),
      timeFormatted: new Date().toLocaleTimeString(),
    },
  });
});

app.get("/api/v1/users", (req, res) => {
  return res.status(200).json({
    status: 200,
    message: "Lista de usuários",
    data: users,
  });
});

app.get("/api/v1/users/:id", (req, res) => {
  const user = users.find((u) => u.id === parseInt(req.params.id));
  if (!user) {
    return res
      .status(404)
      .json({ status: 404, message: "Usuário não encontrado" });
  }
  return res
    .status(200)
    .json({ status: 200, message: "Usuário encontrado", data: user });
});

// ➕ Cria um novo usuário
app.post("/api/v1/users", (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res
      .status(400)
      .json({ status: 400, message: "Todos os campos são obrigatórios" });
  }
  const newUser = { id: users.length + 1, name, email, password };
  users.push(newUser);
  return res.status(201).json({
    status: 201,
    message: "Usuário criado com sucesso",
    data: newUser,
  });
});

app.put("/api/v1/users/:id", (req, res) => {
  const user = users.find((u) => u.id === parseInt(req.params.id));
  if (!user) {
    return res
      .status(404)
      .json({ status: 404, message: "Usuário não encontrado" });
  }

  const { name, email, password } = req.body;
  user.name = name || user.name;
  user.email = email || user.email;
  user.password = password || user.password;

  return res
    .status(200)
    .json({ status: 200, message: "Usuário atualizado", data: user });
});

app.delete("/api/v1/users/:id", (req, res) => {
  const userIndex = users.findIndex((u) => u.id === parseInt(req.params.id));
  if (userIndex === -1) {
    return res
      .status(404)
      .json({ status: 404, message: "Usuário não encontrado" });
  }

  users.splice(userIndex, 1);
  return res
    .status(200)
    .json({ status: 200, message: "Usuário removido com sucesso" });
});

const port = 3000;
// 🔥 Inicia o servidor
app.listen(port, () => {
  console.log(`✅ API rodando na porta ${port}`);
});
