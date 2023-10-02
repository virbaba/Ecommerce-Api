const express = require('express');

const router = express.Router();
const product_controller = require('../controller/products');

router.get('/', product_controller.product);// default
router.get('/products', product_controller.display); // product list
router.post('/products/create', product_controller.create); // create product
router.delete('/products/:id', product_controller.delete); // delete product
router.post('/products/:id/update_quantity', product_controller.update); // update the product

module.exports = router;