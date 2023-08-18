const mongodb = require('mongodb');
const getDb = require('../util/database').getDb;

class Product {
    constructor(title, price, description, imageUrl) {
        this.title = title;
        this.price = price;
        this.description = description;
        this.imageUrl = imageUrl; 
    }

    save() {
        // saving data to database
        const db = getDb();
        // this is the product
       return db.collection('products')
        .insertOne(this)
        .then((result) => {
            console.log(result)
        }).catch((err) => {
            console.log(err)
        });
    }

    static fetchAll() {
        const db = getDb();
        // find() returns a cursor
        return db.collection('products')
        // This return a cursour
        .find()
        // If you have many many documents you will need pagination
        .toArray()
        .then(products => {
            console.log(products)
            return products;
        }).catch(err => {
            console.log(err)
        })
    }

    static findById(prodId) {
        const db = getDb();
        // find() returns a cursor
        return db.collection('products')
        // This return a cursour
        .find({_id: new mongodb.ObjectId(prodId)})
        .next()
        .then(product => {
            console.log(product)
            return product;
        }).catch(err => {
            console.log(err)
        })
    }
}

// exporting modal
module.exports = Product;