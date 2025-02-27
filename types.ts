export interface Pokemon {
  id: number;
  name: string;
  image: string;
  types: string[];
  category: string; // 追加
}

export interface PokemonDetail extends Pokemon {
  description: string;
}
