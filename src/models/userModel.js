import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import validator from 'validator';


const userSchema = new mongoose.Schema(
  {
    name: {
        type:String,
        required:true,
        trim:true,
        validate: [validator.isAlphanumeric, 'Only Alphanumeric characters'],
    },
    lastname: {
        type:String,
        required:true,
        trim:true,
        validate: [validator.isAlphanumeric, 'Only Alphanumeric characters'],
    },
    email: {
      type: String,
      required: [true, 'Email area is required'],
      unique: true,
      validate: [validator.isEmail, 'Valid email is required'],
    },
    password: {
      type: String,
      required: [true, 'Password area is required'],
      minLength: [4, 'At least 4 characters'],
    },
  },
  {
    collection:"users",
    timestamps: true,
  }
);

userSchema.pre('save', function (next) {
  const user = this;
  bcrypt.hash(user.password, 10, (err, hash) => {
    user.password = hash;
    next();
  });
});

const User = mongoose.model('users', userSchema);

export default user;
