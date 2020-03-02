const clear = require('clear');

const pokemonSearch = require('./search/pokemonSearch');
const pokemonQuestion = require('./question/pokemonQuestion');
const space = require('./utils/space');

clear();
space();

console.log('Welcome to POKEDEX!!!')
space();

const option = pokemonQuestion();

pokemonSearch(option);
