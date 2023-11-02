const updateScore = async (req, res) => {
    const { id, name, password } = req.body;
    const plyer = await db.query(`UPDATE plyer`)
};


export {updateScore}