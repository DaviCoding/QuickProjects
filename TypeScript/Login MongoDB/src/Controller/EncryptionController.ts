import bcrypt from "bcrypt";
export default class EncryptController {
  text: string;
  constructor(text: string) {
    this.text = text;
  }

  public async Encrypt(): Promise<string> {
    let salt = bcrypt.genSaltSync(10);
    let hash = bcrypt.hashSync(this.text, salt);

    return hash;
  }
}
