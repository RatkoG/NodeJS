const express = require('express');

const shopController = require('../controllers/shop');

const router = express.Router();

router.get('/', shopController.getIndex);

router.get('/products', shopController.getProducts);

// This is how we pass dynamic parameters in the URL
router.get('/products/:productId', shopController.getProduct)

router.get('/cart', shopController.getCart);

router.post('/cart', shopController.postCart);

// router.post('/create-order', shopController.postOrder)

// router.get('/orders', shopController.getOrders);

// router.post('/cart-delete-item', shopController.postCartDeleteProduct)

module.exports = router;
