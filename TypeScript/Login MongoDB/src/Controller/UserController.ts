import chalk from "chalk";
import LoginModels from "../Models/LoginModels.ts";
import EncryptController from "./EncryptionController.ts";

export default class LoginController {
  name: string;
  email: string;
  password: string;
  constructor(name: string, email: string, password: string) {
    this.name = name;
    this.email = email;
    this.password = password;
  }

  async CreateAccount() {
    try {
      return await new LoginModels({
        name: this.name,
        email: this.email,
        password: await new EncryptController(this.password).Encrypt(),
      }).save();
    } catch (error) {
      console.log(chalk.red(`Erro ao criar o usuário, erro: ${error}`));
    }
  }

  async LoginAccount() {
    return await LoginModels.find({ name: this.name, email: this.email });
  }
}
