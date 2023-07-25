import { AppScreen } from "@components";
import { PokemonCard } from "../project/PokemonCard";
import { useBaseStore } from "@store";

// interface PokeDetailsScreen {
//   pokemon: Pokemon | undefined,
// }

export const PokeDetails = () => { // {pokemon}: PokemonCardProps

  const {pokemon} = useBaseStore();

  return (
    <>
      <AppScreen header={{ title: "Pokemon Details" }}>
        <img
          src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
          alt="PokeAPI"
          width="60%"
        />
        {pokemon != undefined && <PokemonCard pokemon={pokemon}/>}
      </AppScreen>
    </>
  );
};
