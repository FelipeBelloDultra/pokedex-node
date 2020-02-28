const axios = require('axios');

const pokemonInfo = require('./pokemonInfo');

module.exports = async function searchPoke(pokemon) {
  try {
    const apiPoke = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.toLowerCase()}/`);
    const pokeSuccess = apiPoke.data;

    pokemonInfo(pokeSuccess);
  } catch (error) {
    console.log();
    console.log('-------------------------');
    
    console.log(`Impossível encontrar esse pokemon (${pokemon})`);
  };
};
