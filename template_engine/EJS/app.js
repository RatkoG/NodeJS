const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');
const sequelize = require('./util/database')
const Product = require('./models/product')
const User = require('./models/user')

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin',adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

// Creating Relation/Associations
Product.belongsTo(User, {constraints: true, onDelete: 'CASCADE'})
// Define the inverse relationship
User.hasMany(Product)

// Sync syncs your modal to the database by creating the appropriate tables
// Don't use this force on production
// This is for overwriting the tables
sequelize.sync({force: true}).then(result => {
    // console.log(result); 
    app.listen(3000);
}).catch(err => {
    console.log(err);
});
