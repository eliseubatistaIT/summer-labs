import { PokemonCard, PokemonCardSimple } from "./PokemonCard";

interface Ability {
  name: string;
  url: string;
}

export interface Stat {
  base_stat: number;
  effort: number;
}

export interface Sprites {
  back_default: string;
  back_female?: string;
  back_shiny: string;
  back_shiny_female?: string;
  front_default: string;
  front_female?: string;
  front_shiny: string;
  front_shiny_female?: string;
}

interface Move {
  name: string;
  url: string;
}

interface Type {
  slot: number;
  type: {
    name?: string;
    url?: string;
  };
}

export interface Pokemon {
  abilities: Ability[];
  name: string;
  id: number; // número do pokemon na pokedex
  sprites: Sprites; // criar estrutura das sprites
  stats: Stat[];
  types: Type[];
  base_experience: number;
  moves: Move[];
}

export const DrawAllPokemons = ({ pokemons }: { pokemons: Pokemon[] }) => {
  return (
    <>
      {pokemons.map((pokemon) => (
        <PokemonCardSimple key={pokemon.id} pokemon={pokemon} />
      ))}
    </>
  );
};
