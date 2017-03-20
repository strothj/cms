import { ExtendableError } from '../core';
import User from './User';

export class SetupError extends ExtendableError {}
export class PrivilegeError extends ExtendableError {}

/**
 * Creates a user account.
 *
 * @param {object} user Authenticated user or null if no user is authenticated.
 * @param {object} args Arguments passed in by Swagger middleware.
 */
export const createUser = async (user, args) => {
  const setupMode = (await User.count() === 0);

  // If the server doesn't have any users yet, allow the creation of an admin
  // user while no user is authenticated. Ensure the created user has the role
  // "admin".
  if (setupMode) {
    if (args.user.role !== 'admin') {
      return Promise.reject(new SetupError('First user must have the role "admin".'));
    }
    return User.create(args.user);
  }

  // Only admin users can create users of type "admin" and "editor".
  const isAdmin = Boolean(user && user.role === 'admin');
  if (!isAdmin && (args.user.role === 'admin' || args.user.role === 'editor')) {
    return Promise.reject(new PrivilegeError('Need admin privilege to creat that user type'));
  }

  return User.create(args.user);
};
