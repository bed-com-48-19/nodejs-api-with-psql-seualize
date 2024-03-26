module.exports = {
    Host: "localhost",
    USER: "postgres",
    PASSWORD:"140784",
    DB: "meep_app",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
};