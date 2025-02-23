import chalk from "chalk";
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
  constructor(name: string, email: string, password: string) {
    this.name = name;
    this.email = email;
    this.password = password;
  }

  async CreateAccount() {
    try {
      return await new LoginModels({
        name: "Davi Alves",
        email: "davialves.xy@gmail.com",
        password: "1234",
      }).save();
    } catch (error) {
      console.log(chalk.red(`Erro ao criar o usuário, erro: ${error}`));
    }
  }

  async LoginAccount() {
    return await LoginModels.find();
  }
}
