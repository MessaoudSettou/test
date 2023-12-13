const express = require('express');
const ProductController = require('../Controllers/ProductController');
const ProductRouter = express.Router();

ProductRouter.use(express.json());

ProductRouter.get('/:id', ProductController.getProductById);
ProductRouter.get('/', ProductController.getAllProducts);
ProductRouter.post('/add' , ProductController.createProduct) ;
ProductRouter.get('/:name', ProductController.getProductByName);

module.exports = ProductRouter;
