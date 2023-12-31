const Product = require("../models/product");

exports.getAddProduct = (req, res, next) => {
    res.render("admin/edit-product", {
      pageTitle: "Add Product",
      path: "/admin/add-product",
      editing: false
    });
  };
  
  exports.postAddProduct = (req, res, next) => {
    const title = req.body.title 
    const imageUrl = req.body.imageUrl
    const price = req.body.price
    const description = req.body.description 
    // This is coming from sequelize
    // This is a magic method
    // chechk the user model
    req.user.createProduct({
      title: title,
      imageUrl: imageUrl,
      price: price,
      description: description,
     }).then(
      result => {
        console.log(result)
        console.log('Created Product')
        res.redirect('/admin/products')
      }
   ).catch(err => console.log(err))
  };
  exports.getEditProduct = (req, res, next) => {
    const editMode = req.query.edit;
    if (!editMode){
      return res.redirect('/')
    }

    const  prodId = req.params.productId
    Product.findByPk(prodId).then(product => {
      if (!product){
        return res.redirect('/')
      }
      res.render("admin/edit-product", {
        pageTitle: "Edit Product",
        path: "/admin/edit-product",
        // instead of passing boolean
        editing: editMode,
        product: product
      });
    }).catch(err => console.log(err))
  };

exports.postEditProduct = (req, res, next) => {
const prodId = req.body.productId
const updatedTitle = req.body.title
const updatedPrice = req.body.price
const updatedImageUrl = req.body.imageUrl
const updatedDescription = req.body.description
Product.findByPk(prodId).then((product) => {
  product.title = updatedTitle;
  product.price = updatedPrice;
  product.imageUrl = updatedImageUrl;
  product.description = updatedDescription;
  return product.save()
}).then(result => {
  console.log('UPDATED PRODUCT')
  res.redirect('/admin/products')
}).catch(err => console.log(err))
}


exports.getProducts = (req, res, next) => {
  req.user.getProducts().then(products => {
    res.render("admin/products", {
      prods: products,
      pageTitle: "Admin Products",
      path: "/admin/products",
    });
   }).catch(err => console.log(err))
}

exports.postDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId
  Product.findByPk(prodId).then(product => {
    // This is sequelize method for deleting
    return product.destroy()
  }).then(() => {
    res.redirect('/admin/products')
  })
  .catch(err => console.log(err))
}
