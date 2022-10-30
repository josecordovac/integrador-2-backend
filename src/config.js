import {config} from 'dotenv'

config();

export default {
  dbUser: process.env.DB_USER || "",
  dbPassword: process.env.DB_PASSWORD || "",
  dbServer: process.env.DB_SERVER || "",
  dbDatabase: process.env.DB_DATABASE || "",
  host: process.env.HOST || "0.0.0.0",
  port: process.env.PORT || 3000,
};