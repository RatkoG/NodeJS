const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

// Private variable used only in this file
let _db;

const mongoConnect = (callback) => {
    // This is data connection pool by mongodb
    // constructor
    
MongoClient.connect('mongodb+srv://ratkogjurichanin:nodeJS@cluster0.eulz2l9.mongodb.net/?retryWrites=true&w=majority')
.then(client => {
    console.log("Connected!!!");
    // Connecting and storing the connection to the database
    _db = client.db();
    callback()
})
.catch(err => {
    console.log(err);
    throw err;
}) 
}
// Returning access to the database
const getDb = () => {
    if (_db) {
      return _db;
    }
    throw 'No database found!';
  };

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;