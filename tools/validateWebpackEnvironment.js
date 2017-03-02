/**
 * @returns {{ production: boolean, target: ('node'|'web')}}
 */
function validateWebpackEnvironmentVariables({ production = false, target }) {
  if (production && typeof production !== 'boolean') {
    throw new Error('Expected production to be true or false.');
  }

  if (target !== 'node' && target !== 'web') {
    throw new Error('Expected target to equal "node" or "web".');
  }

  return { production, target };
}

module.exports = validateWebpackEnvironmentVariables;
