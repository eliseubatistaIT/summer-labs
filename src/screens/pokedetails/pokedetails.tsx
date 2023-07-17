import { AppScreen } from "@components";
import { useProjectHelper } from "../project/project.hook";
import { PokemonCard } from "../project/PokemonCard";
import { Pokemon } from "../project/Pokemon";


export const PokeDetails = ({pokemon} : any) => { // {pokemon}: PokemonCardProps

  return (
    <>
      <AppScreen header={{ title: "Pokemon Details" }}>
        <img
          src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
          alt="PokeAPI"
          width="60%"
        />
        {pokemon != undefined && <PokemonCard props={pokemon}/>}
      </AppScreen>
    </>
  );
};
