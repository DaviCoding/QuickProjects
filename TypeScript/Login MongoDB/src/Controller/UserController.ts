import { errorMonitor } from "node:stream";
import LoginModels from "../Models/LoginModels.ts";
import bcrypt from "bcrypt";

async function Encrypt(password: string): Promise<string> {
  let salt = bcrypt.genSaltSync(10);
  let hash = bcrypt.hashSync(password, salt);

  return hash;
}

export default class LoginController {
  name: string;
  email: string;
  password: string;
  constructor(name: string, email: string, password: string, status: number) {
    this.name = name;
    this.email = email;
    this.password = password;

    try {
      Encrypt(this.password).then((hash) => {
        this.password = hash;
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
      });
    } catch (error) {
      console.error(error);
    }
  }

  private CreateAccount() {
    return console.log("não está pronto o cadastro.");
  }

  private async LoginAccount() {
    try {
      const data = await LoginModels.find({
        email: this.email,
        name: this.name,
      }).toArray();

      if (data.length === 0) {
        console.log("Usuário não encontrado");
        return false; // Retorna falso se o usuário não existir
      }

      const result = bcrypt.compareSync(this.password, data[0].password);

      if (result) {
        console.log(true); // Login bem-sucedido
        return true; // Pode retornar algum valor ou token de sucesso aqui
      } else {
        console.log(false); // Senha incorreta
        return false; // Retorna falso se a senha não coincidir
      }
    } catch (err) {
      throw new Error(`Erro ao tentar fazer login, erro: ${err}`);
    }
  }
}
