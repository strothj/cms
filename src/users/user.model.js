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
    min: 6,
    max: 100,
  },
  displayName: {
    type: String,
    required: true,
    min: 2,
    // Needs to fit first and last names with comma and space
    max: 102,
  },
  name: {
    firstName: {
      type: String,
      min: 2,
      max: 50,
      required: requireIfNameSet,
    },
    lastName: {
      type: String,
      min: 2,
      max: 50,
      required: requireIfNameSet,
    },
  },
  email: {
    type: String,
    required: true,
    max: 100,
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
  },
  /* eslint-enable no-underscore-dangle, no-param-reassign, no-unused-vars */
  // Display Mongoose
  virtuals: true,
});

const userModel = mongoose.model('User', userSchema, 'users');

export default userModel;
