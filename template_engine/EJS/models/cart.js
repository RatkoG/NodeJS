const fs = require('fs');
const path = require('path');

const p = path.join(
    path.dirname(require.main.filename),
    "data",
    "cart.json"
  );

module.exports = class Cart {
    // There is no constructor because this will always exist.
    // The constructor is only used to create a new object.
    // This is a static method because we don't need to create a new cart to add a product to it.
    // We can just call the method directly on the class.
   static addProduct(id, productPrice) {
    // Fetch the previous cart
    fs.readFile(p, (err, fileContent) => {
        let cart = {products: [], totalPrice: 0};
        if (!err) {
            cart = JSON.parse(fileContent);
        }
        // Analyze the cart => Find existing product
        const existingProductIndex = cart.products.findIndex(prod => prod.id === id);
        const existingProduct = cart.products[existingProductIndex]
        let updatedProduct;
        // Add new product/ increase quantity
        if (existingProduct) {
            updatedProduct = {...existingProduct};
            updatedProduct.qty = updatedProduct.qty + 1;
            cart.products = [...cart.products]
            cart.products[existingProductIndex] = updatedProduct
        } else {
            updatedProduct = {id: id, qty: 1};
            cart.products = [...cart.products, updatedProduct];
        }
        cart.totalPrice = cart.totalPrice + +productPrice;
        fs.writeFile(p , JSON.stringify(cart), (err) => {
            console.log(err)
        })
    })
   }
}