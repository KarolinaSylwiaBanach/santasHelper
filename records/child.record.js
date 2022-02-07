const {pool} = require("../utils/db");

class ChildRecord {
    constructor() {
    }

    static async listAll() {
        const [results] = await pool.execute("SELECT * FROM `children`");
        return results;
    }


}

module.exports = {
    ChildRecord,
}