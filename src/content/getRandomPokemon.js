export const getRandomPokemons = async (count) => {
  const pokemonsResponse = await fetch("https://pokeapi.co/api/v2/pokemon");
  const pokemonsData = await pokemonsResponse.json();
  const pokemonCount = pokemonsData.count;
  const pokemonRandom = new Array(count).map(() =>
    Math.round(Math.random() * pokemonCount),
  );
  console.log(pokemonRandom);

  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemonRandom}`,
  );
  const data = await response.json();
};
