import dotenv from 'dotenv'
dotenv.config();

import pkg from 'pg';
const {Pool} = pkg;

const pool = new Pool({
  type: "postgres",
  host: process.env.HOSTNAME,
  port: 5432,
  username: process.env.USERNAME,
  password: process.env.PASSWORD,
  database: process.env.DATABASE_NAME,
  synchronize: true,
});

export default pool;