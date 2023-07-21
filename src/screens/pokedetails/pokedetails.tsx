import { AppScreen } from "@components";
import { useProjectHelper } from "../project/project.hook";
import { PokemonCard } from "../project/PokemonCard";
import { Pokemon } from "../project/Pokemon";
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
