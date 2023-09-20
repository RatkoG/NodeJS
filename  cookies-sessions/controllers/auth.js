const bcrypt = require("bcryptjs");
const User = require("../models/user");

exports.getLogin = (req, res, next) => {
  res.render("auth/login", {
    path: "/login",
    pageTitle: "Login",
    isAuthenticated: false,
  });
};

exports.getSignup = (req, res, next) => {
  res.render("auth/signup", {
    path: "/signup",
    pageTitle: "Signup",
    isAuthenticated: false,
  });
};

exports.postLogin = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });
    if (!user) {
      return res.redirect("/login");
    }

    const doMatch = await bcrypt.compare(password, user.password);
    if (doMatch) {
      req.session.isLoggedIn = true;
      req.session.user = user;
      await req.session.save();
      return res.redirect("/");
    } else {
      return res.redirect("/login");
    }
  } catch (error) {
    console.log(error);
  }
};

// exports.postLogin = (req, res, next) => {
//   const { email, password } = req.body;

//   User.findOne({ email: email })
//     .then((user) => {
//       if (!user) {
//         return res.redirect("/login");
//       }
//       // Checking if the password matches in the database
//       bcrypt
//         .compare(password, user.password)
//         .then((doMatch) => {
//           if (doMatch) {
//             req.session.isLoggedIn = true;
//             req.session.user = user;
//             return req.session.save((err) => {
//               console.log(err);
//               res.redirect("/");
//             });
//           }
//           res.redirect("/login");
//         })
//         .catch((err) => {
//           console.log(err);
//           res.redirect("/login");
//         });
//     })
//     .catch((err) => console.log(err));
// };

exports.postSignup = async (req, res, next) => {
  try {
    const { email, password, confirmPassword } = req.body;
    // Check if user with email exist?
    // With MongoDB we can add index on email field and give it unique property. This is one of the options to check if the email already exists in the database.
    // Alternative is to find the user
    const userDoc = await User.findOne({ email });

    if (userDoc) {
      return res.redirect("/signup");
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const user = new User({
      email: email,
      password: hashedPassword,
      cart: { items: [] },
    });

    await user.save();
    res.redirect("/login");
  } catch (error) {
    console.log(error);
  }
};

exports.postLogout = (req, res, next) => {
  req.session.destroy((err) => {
    console.log(err);
    res.redirect("/");
  });
};
