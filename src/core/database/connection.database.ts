import mongoose, { ConnectOptions } from "mongoose";
import config from "../config";
import { env } from "../constants/env.constant";

class ConnectionDatabase {
  static #instance: ConnectionDatabase;

  private constructor() {
    this.#connect();
  }

  public static getInstance(): ConnectionDatabase {
    if (!ConnectionDatabase.#instance) {
      ConnectionDatabase.#instance = new ConnectionDatabase();
    }

    return ConnectionDatabase.#instance;
  }

  async #connect() {
    const connectOptions: ConnectOptions = {};

    try {
      this.#configDevelopment();
      await mongoose.connect(config.mongo.uri, connectOptions);
      console.log("Database is connected");
    } catch (error: any) {
      console.log(error.message);
    }
  }

  #configDevelopment() {
    if (config.env === env.DEV) {
      mongoose.set("debug", true);
    }
  }
}

export default ConnectionDatabase;
