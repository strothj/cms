import mongoose, { Schema } from 'mongoose';

// If either a first name or last name is provided, then both are required.
function requireIfNameSet() {
  return this.name.firstName || this.name.lastName;
}

const userSchema = new Schema({
  provider: {
    type: String,
    required: true,
    enum: ['local'],
  },
  username: {
    type: String,
    required: true,
    minlength: 6,
    maxlength: 100,
  },
  password: {
    type: String,
    required: true,
    // bcrypt hash length
    minlength: 60,
    maxlength: 60,
  },
  displayName: {
    type: String,
    required: true,
    minlength: 2,
    // Needs to fit first and last names with comma and space
    maxlength: 102,
  },
  name: {
    firstName: {
      type: String,
      minlength: 2,
      maxlength: 50,
      required: requireIfNameSet,
    },
    lastName: {
      type: String,
      minlength: 2,
      maxlength: 50,
      required: requireIfNameSet,
    },
  },
  email: {
    type: String,
    required: true,
    maxlength: 100,
    lowercase: true,
  },
  role: {
    type: String,
    required: true,
    enum: ['admin', 'editor', 'subscriber'],
  },
});

userSchema.set('toJSON', {
  /* eslint-disable no-underscore-dangle, no-param-reassign, no-unused-vars */
  transform: (doc, ret, options) => {
    delete ret._id;
    delete ret.__v;
    delete ret.password;
  },
  /* eslint-enable no-underscore-dangle, no-param-reassign, no-unused-vars */
  // Display Mongoose 'id' field.
  virtuals: true,
});

const userModel = mongoose.model('User', userSchema, 'users');

export default userModel;
