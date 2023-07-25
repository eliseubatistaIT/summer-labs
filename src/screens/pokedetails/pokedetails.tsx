import { AppScreen, PokemonCard } from "@components";
import { useBaseStore } from "@store";

// interface PokeDetailsScreen {
//   pokemon: Pokemon | undefined,
// }

export const PokeDetails = () => {
  const { pokemon } = useBaseStore();

  return (
    <>
      <AppScreen header={{ title: "Pokemon Details" }}>
        <img
          src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
          alt="PokeAPI"
          width="60%"
        />
        {pokemon != undefined && <PokemonCard pokemon={pokemon} type="full" />}
      </AppScreen>
    </>
  );
};
