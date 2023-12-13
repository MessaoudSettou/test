
const Product = require('../Models/ProductModel');

const getProductById = async (req, res) => {
    const productId = req.params.id;

    try {
        const product = await Product.findByPk(productId);
        if (!product) {
            res.status(404).json({ error: 'Product not found' });
            return;
        }

        res.json(product);
    } catch (err) {
        console.error('Error retrieving product by ID:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const createProduct = async (req, res) => {
    const productData = req.body;

    try {
        const createdProduct = await Product.create(productData);
        res.status(201).json({ message: 'Product created successfully', productId: createdProduct.id });
    } catch (err) {
        console.error('Error creating product:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const getAllProducts = async (req, res) => {
    try {
        const products = await Product.findAll();
        res.status(200).json(products);
    } catch (err) {
        console.error('Error retrieving products:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
const getProductByName = async (req, res) => {
    try {
        const productIdToFind = req.params.id; 
        const product = await Product.findOne({
          where: {
            id: productIdToFind,
          },
        });
    
        if (product) {
          return res.status(200).json(product.toJSON());
        } else {
          return res.status(404).json({ error: 'Product not found' });
        }
      } catch (error) {
        console.error('Error:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
      }
    };
module.exports = { getProductById, createProduct, getAllProducts , getProductByName };
