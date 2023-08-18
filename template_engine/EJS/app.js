const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');
const sequelize = require('./util/database')
const Product = require('./models/product')
const User = require('./models/user')
const Cart = require('./models/cart')
const CartItem = require('./models/cart-item')
const Order = require('./models/order')
const OrderItem = require('./models/order-items')

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
    User.findByPk(1)
    .then(user => {
        req.user = user
        // Continue the request
        next()
    })
    .catch(err => console.log(err))
})

app.use('/admin',adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

// Creating Relation/Associations
Product.belongsTo(User, {constraints: true, onDelete: 'CASCADE'})
// Define the inverse relationship
User.hasMany(Product)
User.hasOne(Cart)
Cart.belongsTo(User)
// Define the many to many relationship
// CartItem is the join table
// This is where the connections are stored
Cart.belongsToMany(Product, {through: CartItem})
Product.belongsToMany(Cart, {through: CartItem})
Order.belongsTo(User)
User.hasMany(Order)
Order.belongsToMany(Product, {through: OrderItem})


// Sync syncs your modal to the database by creating the appropriate tables
// Don't use this force on production
// This is for overwriting the tables
// {force: true}
sequelize.sync().then(result => {
    // console.log(result); 
    User.findByPk(1)
})
.then(user => {
    if (!user){
        return User.create({name: 'Max', email: 'max@gmail.com'})
    }
    return user
})
.then((user) => {
   return user.createCart()
    
})
.then(cart => {
    app.listen(3000);
})
.catch(err => {
    console.log(err);
});
