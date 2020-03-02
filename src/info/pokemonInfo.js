const space = require('../utils/space');

module.exports = function infoPokemon(pokemon) {
  space();
  console.log('Name: ');
  const name = pokemon.name.replace('-', ' | ');
  console.log(`${name}.`);

  space();
  console.log(`${name} attacks: `);
  const attack = pokemon.moves.map(attacks => attacks.move.name.replace('-', ' '));
  console.log(`${attack.join(', ')}.`);

  space();
  console.log('Type: ');
  const type = pokemon.types.map(types => types.type.name);
  console.log(`${type.join(', ')}.`);

  space();
  console.log('Photo: ');
  const photo = pokemon.sprites.front_default;
  console.log(`${photo || 'Not photo'}`);

  space();
  console.log('ID: ');
  const id = pokemon.id;
  console.log(`${id}`);
}
