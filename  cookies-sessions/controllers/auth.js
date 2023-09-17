exports.getLogin = (req, res, next) => {
 const isLoggedIn = req.get('Cookie').split('=')[1] === 'true'
  res.render("auth/login", {
    path: "/login",
    pageTitle: "Login",
    isAuthenticated: isLoggedIn
  });
};


exports.postLogin = (req, res, next) => {
    // this data will be lost after we send a response
    // req.isLoggedIn = true

    // this is a cookie that will be stored on the client
    res.setHeader('Set-Cookie', 'loggedIn=true; HttpOnly');
    res.redirect('/');
  };
  