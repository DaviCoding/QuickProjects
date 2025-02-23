import db from "../Database/connect.ts";
export default class LoginController {
  name: string;
  email: string;
  password: string;
  constructor(name: string, email: string, password: string, status: number) {
    this.name = name;
    this.email = email;
    this.password = password;

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

  private LoginAccount() {}
}
