const express = require("express")
const router = express.Router();

const {add_product,get_product } = require("../../controller/product_controller/product.controller")

router.post('/create_product',add_product)
router.get('/get_all_products',get_product)
router.patch('/update_product',update_product)
router.delete('/delete_product/:id',delete_product)

module.exports = router
