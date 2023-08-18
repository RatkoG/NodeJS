const mongodb = require('mongodb');

const mongoConnect = (callback) => {
// This is data connection pool by mongodb
// constructor
const MongoClient = mongodb.MongoClient;

MongoClient.connect('mongodb+srv://ratkogjurichanin:nodeJS@cluster0.eulz2l9.mongodb.net/?retryWrites=true&w=majority')
.then(client => {
    console.log("Connected!!!");
    callback(client)
})
.catch(err => {
    console.log(err);
}) 
}

module.exports = mongoConnect;