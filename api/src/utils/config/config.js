//interaction with environment
require("dotenv").config();

module.exports = {
    dbUser: process.env.DB_USER || "postgres",
    dbName: process.env.DB_NAME || "rickandmorty",
    dbPort: process.env.DB_PORT || "5432",
    dbHost: process.env.DB_HOST || "localhost",
    dbPassword: process.env.DB_PASSWORD || "marmich311",
    host: process.env.HOST || "localhost",
    PORT: process.env.PORT || 3001,
};
