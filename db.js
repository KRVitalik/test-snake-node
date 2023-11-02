import dotenv from 'dotenv'
dotenv.config();

import pkg from 'pg';
const {Pool} = pkg;

const pool = new Pool({
    user: "postgres",
    password: process.env.DB_PASSWORD,
    host: "localhost",
    port: 5432,
    database: "node_postgres_snake",
});

export default pool;