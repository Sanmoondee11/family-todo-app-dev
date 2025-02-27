import type { Pokemon } from "../../types";

export const getRandomPokemon = async (): Promise<Pokemon> => {
  const totalPokemon = 1008;
  const randomId = Math.floor(Math.random() * totalPokemon) + 1;

  const [pokemonData, speciesData] = await Promise.all([
    fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`).then((res) =>
      res.json()
    ),
    fetch(`https://pokeapi.co/api/v2/pokemon-species/${randomId}`).then((res) =>
      res.json()
    ),
  ]);

  const japaneseName =
    speciesData.names.find(
      (name: { language: { name: string } }) => name.language.name === "ja"
    )?.name || pokemonData.name;
  const japaneseTypes = await Promise.all(
    pokemonData.types.map(async (type: { type: { url: string } }) => {
      const typeData = await fetch(type.type.url).then((res) => res.json());
      return (
        typeData.names.find(
          (name: { language: { name: string } }) => name.language.name === "ja"
        )?.name || typeData.name
      );
    })
  );
  const japaneseCategory =
    speciesData.genera.find(
      (genus: { language: { name: string } }) => genus.language.name === "ja"
    )?.genus || "不明ポケモン";

  return {
    id: pokemonData.id,
    name: japaneseName,
    image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonData.id}.png`,
    types: japaneseTypes,
    category: japaneseCategory,
  };
};
