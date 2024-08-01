
module.exports = (sequelize,DataTypes)=>{
    const product = sequelize.define('product',{
        name:{
            type:DataTypes.STRING,
            allowNull:false // it means name field have validation or require
        },
        description:{
            type:DataTypes.STRING,
        },
        price:{
            type:DataTypes.FLOAT,
            allowNull:false

        }

    })
    return product;
}