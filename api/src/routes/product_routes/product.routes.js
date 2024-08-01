const express = require("express")
const router = express.Router();

const {add_product,get_product } = require("../../controller/product_controller/product.controller")

router.post('/create_product',add_product)
router.get('/get_all_products',get_product)

module.exports = router