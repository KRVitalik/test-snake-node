
import db from '../db.js'
import bcrypt from 'bcryptjs'
import Errors from '../helpers/HttpError.js';
import ctrlWrapper from '../helpers/ctrlWrapper.js';

const createPlyer = async (req, res) => {
    const { name, password, score } = req.body;
    
    const plyer = await db.query(`SELECT name FROM plyer WHERE name = $1`, [name])
    if (plyer.rows[0]) {
        throw Errors(409, "Name in use")
    }
    const hashPassword = await bcrypt.hash(password, 10)
    
    const newPlyer = await db.query(`INSERT INTO plyer (name, password, score) values ($1, $2, $3) RETURNING *`, [name, hashPassword, score])
    
    res.status(201).json(newPlyer.rows[0])
};

const getPlyer = async (req, res) => {
    const plyer = await db.query(`SELECT * FROM plyer ORDER BY score DESC LIMIT 10`)
    res.json(plyer.rows)
};

const updateScore = async (req, res) => {
    const { id, score } = req.body;

    const updatedPlyer = await db.query(`UPDATE plyer set score = $1 where id = $2 RETURNING *`, [score, id]);
    if (updatedPlyer.rows.length === 0) {
        throw Errors(404, 'Not found')
    }

    res.json(updatedPlyer.rows[0]);
};


export default {
    createPlyer: ctrlWrapper(createPlyer),
    getPlyer: ctrlWrapper(getPlyer),
    updateScore: ctrlWrapper(updateScore),
}