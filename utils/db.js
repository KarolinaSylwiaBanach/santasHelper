const {createPool} = require('mysql2/promise');
const pool = createPool({
    host: '127.0.0.1',
    user: 'root',
    database: "megak_santas_helper",
    namedPlaceholders: true,
    decimalNumbers: true,
});

module.exports ={
    pool,
}