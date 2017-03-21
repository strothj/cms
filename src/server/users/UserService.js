import { ExtendableError } from '../core';
import User from './User';

export class SetupError extends ExtendableError {}
export class PrivilegeError extends ExtendableError {}

/**
 * Creates a user account.
 *
 * @param {Object} [user=null] Authenticated user or null if no user is authenticated.
 * @param {Object} args Arguments passed in by Swagger middleware.
 * @param {Object} args.user User account to create.
 * @returns {Promise<Object>} The created user.
 */
export const create = async (user, args) => {
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

/**
 * Returns the user specified by the supplied id.
 *
 * @param {object} [user=null] Authenticated user or null if no user is authenticated.
 * @param {object} args Arguments passed in by Swagger middleware.
 * @param {string} args.id The ID of the user to return.
 * @returns {Promise<Object>} The requested user.
 */
export const findOne = async (user, args) => User.findOne({ _id: args.id });

/**
 * Returns a list of users.
 *
 * @param {object} user Authenticated user or null if no user is authenticated.
 * @param {object} args Arguments passed in by Swagger middleware.
 * @param {args.page} [number] Which page of results to return.
 * @param {args.per_page} [number] How many results per page to return.
 */
export const find = async (user, args) => {

};
