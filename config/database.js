// Define the database connection options
const dbConfig = {
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "",
    database: "postgresql",
    entities: [__dirname + "/models/*.js"],
    synchronize: true,
};

module.exports = dbConfig;
