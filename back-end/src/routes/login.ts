// import mongoose from "mongoose";
// import jwt from "jsonwebtoken";
// import bcrypt from "bcrypt";

// let User = mongoose.model("User");

// exports.register = function (req: any, res: any) {
//   var newUser = new User(req.body);
//   newUser.hash_password = bcrypt.hashSync(req.body.password, 10);
//   newUser.save(function (err: any, user: any) {
//     if (err) {
//       return res.status(400).send({
//         message: err,
//       });
//     } else {
//       user.hash_password = undefined;
//       return res.json(user);
//     }
//   });
// };

// exports.sign_in = function (req, res) {
//   User.findOne(
//     {
//       email: req.body.email,
//     },
//     function (err, user) {
//       if (err) throw err;
//       if (!user || !user.comparePassword(req.body.password)) {
//         return res
//           .status(401)
//           .json({
//             message: "Authentication failed. Invalid user or password.",
//           });
//       }
//       return res.json({
//         token: jwt.sign(
//           { email: user.email, fullName: user.fullName, _id: user._id },
//           "RESTFULAPIs"
//         ),
//       });
//     }
//   );
// };

// exports.W = function (req, res, next) {
//   if (req.user) {
//     next();
//   } else {
//     return res.status(401).json({ message: "Unauthorized user!!" });
//   }
// };
// exports.profile = function (req, res, next) {
//   if (req.user) {
//     res.send(req.user);
//     next();
//   } else {
//     return res.status(401).json({ message: "Invalid token" });
//   }
// };
