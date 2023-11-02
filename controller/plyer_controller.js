import db from '../db.js'

const createPlyer = async (req, res) => {
    const { name, password, score } = req.body;
    const newPlyer = await db.query(`INSERT INTO plyer (name, password, score) values ($1, $2, $3) RETURNING *`, [name, password, score])
    res.json(newPlyer.rows[0])
};

const getPlyer = async (req, res) => {
    const plyer = await db.query(`SELECT * FROM plyer`)
    res.json(plyer.rows)
};




export default {createPlyer, getPlyer}