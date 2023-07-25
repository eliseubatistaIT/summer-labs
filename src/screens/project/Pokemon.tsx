import { PokemonCard } from "@components";
import { Pokemon } from "@types";

export const DrawAllPokemons = ({ pokemons }: { pokemons: Pokemon[] }) => {
  return (
    <>
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} type="small" />
      ))}
    </>
  );
};
