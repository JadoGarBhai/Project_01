const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userAuthSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    confirmPassword: { type: String, required: true },
    tokens: [
      {
        token: { type: String, required: true },
      },
    ],
  },

  { collection: "userAuth", versionKey: false }
);

const User = mongoose.model("userAuth", userAuthSchema);

userAuthSchema.pre("save", async function (next) {
  this.password = await bcrypt.hash(this.password, 12);
  this.confirmPassword = await bcrypt.hash(this.confirmPassword, 12);

  next();
});

module.exports = User;
