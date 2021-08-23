// import { sql_query } from "../../lib/db";

import mysql from "serverless-mysql";

// const port: number = Number.parseInt(process.env.MYSQL_PORT, 10) || 3306;
// const mySqlPort = Number(process.env.MYSQL_PORT);
// let host;
// let database;
// let user;
// let password;
// let port;

// if (process.env.NODE_ENV === "production") {
//   host = process.env.MYSQL_HOST;
//   database = process.env.MYSQL_DATABASE;
//   user = process.env.MYSQL_USERNAME;
//   password = process.env.MYSQL_PASSWORD;
//   port = mySqlPort;
// } else {
//   host = process.env.LOCAL_MYSQL_HOST;
//   database = process.env.LOCAL_MYSQL_DATABASE;
//   user = process.env.LOCAL_MYSQL_USERNAME;
//   password = process.env.LOCAL_MYSQL_PASSWORD;
//   port = mySqlPort;
// }
export const db = mysql({
  config :{
    host : process.env.LOCAL_MYSQL_HOST,
    database : process.env.LOCAL_MYSQL_DATABASE,
    user : process.env.LOCAL_MYSQL_USERNAME,
    password : process.env.LOCAL_MYSQL_PASSWORD,
  },
 
 
 })
// export const db = mysql({
//   config: {
//     host : process.env.LOCAL_MYSQL_HOST,
//   database : process.env.LOCAL_MYSQL_DATABASE,
//   user : process.env.LOCAL_MYSQL_USERNAME,
//   password : process.env.LOCAL_MYSQL_PASSWORD,
//   // port: mySqlPort
//   }
// });

// export async function query( {q, values = []}) {
//   try {
//     const results = await db.query(q, values);
//     await db.end();
//     return results;
//   } catch (e) {
//     await db.end();
//     throw Error(e.message);
//   }
// }
export async function sql_query({ query_string, values=[] }) {
  try {
    const results = await db.query(query_string, values);
    await db.end();
    return results;
  } catch (e) {
    throw Error(e.message)
  }
}