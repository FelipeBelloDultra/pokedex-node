const readline = require('readline-sync');

const space = require('./utils/space');

module.exports = function pokemonQuestion() {

  console.log('Press [1] to search for random pokemon!!!');
  console.log('Press [2] to search for pokemon name!!!');

  const option = readline.questionInt('====== ');
  space()

  switch (option) {
    case 1:
      readline.question('Press enter to continue!!!');
      const random = parseInt(Math.random() * 807);
      console.log();
      return random;
    case 2:
      const pokemon = readline.question('Pokemon you want to search? ');
      console.log();
      return pokemon;
  };
};
