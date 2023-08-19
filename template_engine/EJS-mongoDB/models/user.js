const getDb = require('../util/database').getDb;
const mongodb = require('mongodb');

const ObjectId = mongodb.ObjectId;

class User {
    constructor(username, email) {
        this.name = username;
        this.email = email;
    }

    save() {
        const db = getDb();
        // saving data to database
        // this is the product
        return  db.collection('users').insertOne(this)
        .then((result) => {
            console.log(result)
        }).catch((err) => {
            console.log(err)
        });
    }

    static findById(userId) {
        const db = getDb();
        return db.collection('users')
        .findOne({_id: new ObjectId(userId)}) 
    }
}

module.exports = User
