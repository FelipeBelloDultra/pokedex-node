module.exports = function infoPokemon(pokeSuccess) {
    console.log('-------------------------');

    console.log('Name: ');
    const name = pokeSuccess.name;
    console.log(`${name}.`);

    console.log();
    console.log('-------------------------');

    console.log(`${name} attacks: `);
    const attack = pokeSuccess.moves.map(attacks => attacks.move.name.replace('-', ' '));
    console.log(`${attack.join(', ')}.`);
 
    console.log();
}
