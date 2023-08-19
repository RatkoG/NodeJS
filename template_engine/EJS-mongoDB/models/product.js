const mongodb = require('mongodb');
const getDb = require('../util/database').getDb;

class Product {
    constructor(title, price, description, imageUrl, id, userId) {
        this.title = title;
        this.price = price;
        this.description = description;
        this.imageUrl = imageUrl; 
        this._id = id ? new mongodb.ObjectId(id) : null
        this.userId = userId
    }

    save() {
        const db = getDb();
        let dbOp 
        if (this._id){
            // Update product 
            dbOp = db.collection('products').updateOne({_id: this._id}, {$set: this})
        } else {
            dbOp = db.collection('products').insertOne(this)
        }
        // saving data to database
        // this is the product
        return  dbOp.then((result) => {
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

    static deleteById(prodId) {
        const db = getDb();
        return db.collection('products')
        .deleteOne({_id: new mongodb.ObjectId(prodId)})
        .then(() => console.log("deteled"))
        .catch(err => console.log(err))
    }
}

// exporting modal
module.exports = Product;