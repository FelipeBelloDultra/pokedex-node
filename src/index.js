const clear = require('clear');

const pokemonSearch = require('./utils/pokemonSearch');
const pokemonQuestion = require('./utils/pokemonQuestion');
const space = require('./utils/utils/space');

clear();
space();

console.log('Welcome to POKEDEX!!!')
space();

const option = pokemonQuestion();

pokemonSearch(option);
