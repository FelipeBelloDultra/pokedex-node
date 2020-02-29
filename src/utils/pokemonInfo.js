const space = require('./utils/space');

module.exports = function infoPokemon(pokeSuccess) {
  space();

  console.log('Name: ');
  const name = pokeSuccess.name;
  console.log(`${name}.`);  

  space();
  
  console.log(`${name} attacks: `);
  const attack = pokeSuccess.moves.map(attacks => attacks.move.name.replace('-', ' '));
  console.log(`${attack.join(', ')}.`);
  
  space();
  
  console.log('Type: ');
  const type = pokeSuccess.types.map(types => types.type.name);
  console.log(`${type.join(', ')}.`);
  
  space();
  
  console.log('Photo: ');
  const photo = pokeSuccess.sprites.front_default;
  console.log(`${photo || 'Not photo'}`);

  space();
  
  console.log('ID: ');
  const id = pokeSuccess.id;
  console.log(`${id}`);
}
