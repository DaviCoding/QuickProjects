import mongoose from "mongoose";
import dotenv from "dotenv";
import chalk from "chalk";
dotenv.config();

const client = async () => {
  try {
    await mongoose.connect(`${process.env.uri}`);
    console.log(chalk.cyan("MongoDB"));
  } catch (error) {
    console.error(chalk.red("Erro ao conectar ao MongoDB", error));
    process.exit(1);
  }
};

export default client;
