const axios = require('axios');

const pokemonInfo = require('../info/pokemonInfo');
const numberOrString = require('../utils/numberOrString');
const space = require('../utils/space');

module.exports = async function searchPoke(pokemon) {
  try {
    const value = await numberOrString(pokemon);

    const apiPoke = await axios.get(`https://pokeapi.co/api/v2/pokemon/${value ? pokemon : pokemon.toLowerCase()}/`);
    const pokeSuccess = apiPoke.data;
    
    pokemonInfo(pokeSuccess);

  } catch (error) {
    space();

    console.log(`Cannot find this pokemon "${pokemon}"!!!`);
  };
};
