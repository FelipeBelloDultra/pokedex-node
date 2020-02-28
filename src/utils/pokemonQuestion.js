const readline = require('readline-sync');

module.exports = function pokemonQuestion() {
  const pokemon = readline.question('Pokemon you want to search? ');
  console.log();

  return pokemon;
}
