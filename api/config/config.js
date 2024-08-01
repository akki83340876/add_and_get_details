require('dotenv').config()
const {DB_HOST,DB_USERNAME,DB_PASSWORD, DB_NAME}=process.env;
const {Sequelize,DataTypes} = require('sequelize');

const sequelize = new Sequelize(DB_NAME,DB_USERNAME,DB_PASSWORD,{
    host:DB_HOST,
    dialect:'mysql',
    logging:false
});

try{
    sequelize.authenticate()
    console.log("Connection has been establised successfully with DataBase....!")
}catch(error){
    console.error("Unable to connect with Database",error)
}

const db = {}
db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.sequelize.sync({alter:true})

db.product = require("../src/model/product_model/product.model")(sequelize,DataTypes);

module.exports = db;
