import { expect } from 'chai';
import dbConnect from './database';

describe('database', () => {
  it('should return error when no "env" parameter provided', async () => {
    try {
      await dbConnect();
    } catch (e) {
      expect(e.message).to.equal('database: env must be "production" or "testing"');
    }
    await dbConnect('testing');
  });

  it('should not error when multiple connects requested', async () => {
    await dbConnect('testing');
    await dbConnect('testing');
  });
});
