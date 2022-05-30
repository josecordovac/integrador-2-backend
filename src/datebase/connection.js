import sql from "mssql";
import config from '../config'

const dbSettings = {
  user: config.dbUser,
  password: config.dbPassword,
  server: config.dbServer,
  // server: "localhost",
  database: config.dbDatabase,
  // pool: {
  //   max: 10,
  //   min: 0,
  //   idleTimeoutMillis: 30000
  // },
  // connectionTimeout: 150000,
  options: {
    trustServerCertificate: true, // change to true for local dev / self-signed certs
    encrypt: true, // for azure
    // enableArithAbort: true
  },
  port: 56327
}

export async function getConnection() {
  try {
    const pool = await sql.connect(dbSettings)
    return pool
  } catch (error) {
    console.error(error);
  }
}

export { sql }