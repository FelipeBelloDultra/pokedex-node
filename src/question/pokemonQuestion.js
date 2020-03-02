const readline = require('readline-sync');

const space = require('../utils/space');

module.exports = function pokemonQuestion() {

  console.log('Press [1] to search for random pokemon!!!');
  console.log('Press [2] to search for pokemon name or ID!!!');

  let option = readline.questionInt('====== ');
  space()

  switch (option) {
    case 1:
      readline.question('Press enter to continue!!!');
      const random = parseInt(Math.random() * 807);
      return random;
    case 2:
      const pokemon = readline.question('Pokemon you want to search? ');
      return pokemon;
    default:
      while (option != 1 && option != 2) {
        console.log('INVALID!!!');
        option = readline.questionInt('====== ');
        space();

        if (option === 1) {
          readline.question('Press enter to continue!!!');
          const random = parseInt(Math.random() * 807);
          return random;
        } else if (option === 2) {
          const pokemon = readline.question('Pokemon you want to search? ');
          return pokemon;
        };
      };

  };
  console.log();

};
