import { errorMonitor } from "node:stream";
import LoginModels from "../Models/LoginModels.ts";
import bcrypt from "bcrypt";

function Encrypt(password: string): void {
  bcrypt.genSalt(10, function (err, salt) {
    bcrypt.hash(password, salt, function (err, hash) {
      if (err)
        throw new Error(
          `Ocorreu um erro inesperado na criptografia, erro: ${console.table(
            err
          )}`
        );
      return hash;
    });
  });
}

export default class LoginController {
  name: string;
  email: string;
  password: string;
  constructor(name: string, email: string, password: string, status: number) {
    this.name = name;
    this.email = email;
    this.password = password;

    if (!name || !email || !password) return;
    switch (status) {
      case 1:
        this.CreateAccount();
        break;
      case 2:
        this.LoginAccount();
        break;
      default:
        throw new Error(
          `LoginController status does not exist, past status: ${status}`
        );
    }
  }

  private CreateAccount() {
    return console.log("não está pronto o cadastro.");
  }

  private LoginAccount() {
    LoginModels.create({
      name: this.name,
      password: Encrypt(this.password),
    })
      .then()
      .catch((err) => {
        throw new Error(`Erro ao criar um usuário, erro: ${err}`);
      });
  }
}
