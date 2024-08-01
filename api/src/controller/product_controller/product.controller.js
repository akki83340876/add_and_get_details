const db = require("../../../config/config")
const Product = db.product;

// Creating a product details in product table
const add_product = async(req,res)=>{
    try{
        const { name,description,price} = req.body
        if(!name || !price){
            return res.status(401).json({
                status:false,
                message:"Please provide product name and it's price"
            })
        }
        const products = await Product.create({
            name:name,
            description:description,
            price:price
        })
        return res.status(200).json({
            status:true,
            message:"Product added successflly",
            data:products
        })
    }catch(error){
        return res.status(500).json({
            status:false,
            message:error.message
        })
    }
}

// fatch All product from Database
const get_product = async(req,res)=>{
    try{
        const products = await Product.findAll()
        if(!products){
            return res.status(400).json({
                status:false,
                message:"Product not found",
                data:[]
            })
        }
        return res.status(200).json({
            status:true,
            message:"Product data reterived successflly",
            data:products
        })
    }catch(error){
        return res.status(500).json({
            status:false,
            message:error.message
        })
    }
}

module.exports = {
    add_product,get_product
}