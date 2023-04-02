import { MongoClient } from "mongodb";
import config from "../config.js";

export class CnxMongoDB {
  static connection = false;
  static db;
  static nails;

  static conectar = async (_) => {
    try {
      CnxMongoDB.nails = new MongoClient(config.URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });

      await CnxMongoDB.nails.connect();

      CnxMongoDB.db = CnxMongoDB.nails.db(config.BASE);
      CnxMongoDB.connection = true;
    } catch (error) {
      console.log(error.message);
    }
  };

  static desconectar = async (_) => {
    if (!CnxMongoDB.connection) return;
    await CnxMongoDB.nails.close();
  };
}