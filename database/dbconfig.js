const Sequelize = require('sequelize');
const dburl = "postgres://ktmzzqkx:v7df3Yg8QWLCI0yDXrKit-d5A_pkJnG8@stampy.db.elephantsql.com:5432/ktmzzqkx"
const db = new Sequelize(dburl, {dialect: 'postgres'});

db.authenticate()
.then(() => console.log("authenticate work"))
.catch(() => "failed authenticate")




module.exports = db;