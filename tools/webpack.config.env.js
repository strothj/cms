/**
 * @returns {{ production: boolean, target: ('node'|'web')}}
 */
module.exports = ({ production, target }) => {
  if (production && typeof production !== 'boolean') {
    throw new Error('Expected production to be true or false.');
  }

  if (target !== 'node' && target !== 'web') {
    throw new Error('Expected target to equal "node" or "web".');
  }

  return { production: Boolean(production), target };
};
