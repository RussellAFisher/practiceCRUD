require('dotenv').load();

module.exports = {

    development: {
        client: 'pg',
        connection: 'postgres://localhost/q3testdb'
    },

    production: {
        client: 'pg',
        connection: process.env.DATABASE_URL + '?ssl=true'
    }
};
