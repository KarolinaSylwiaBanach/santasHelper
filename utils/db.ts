import {createPool} from 'mysql2/promise';

export const pool = createPool({
    host: '::1',
    user: 'root',
    password: 'root',
    database: 'megak_santas_helper',
    namedPlaceholders: true,
    decimalNumbers: true,
});