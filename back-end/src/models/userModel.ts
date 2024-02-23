// import mongoose from "mongoose";
// import bcrypt from "bcrypt";
// import { Schema } from "mongoose";

// interface UserSchemaIn {
//   email: string;
//   hash_password: string;
//   tokenGernratedOn: Date;
// }
// var UserSchema = new Schema<UserSchemaIn>({
//   email: {
//     type: String,
//     unique: true,
//     lowercase: true,
//     trim: true,
//     required: true,
//   },
//   hash_password: {
//     type: String,
//   },
//   tokenGernratedOn: {
//     type: Date,
//     default: Date.now,
//   },
// });

// UserSchema.methods.comparePassword = function (password: string) {
//   return bcrypt.compareSync(password, this.hash_password);
// };

// mongoose.model("User", UserSchema);
import mongoose, { Document, Schema } from "mongoose";
import bcrypt from "bcryptjs";

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  comparePassword: (enteredPassword: string) => boolean;
}

const userSchema = new Schema<IUser>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

userSchema.methods.comparePassword = async function (enteredPassword: string) {
  return await bcrypt.compare(enteredPassword, this.password);
};

const User = mongoose.model("User", userSchema);

export default User;
