import { AppScreen } from "@components";
import { useBaseStore } from "@store";
import { DrawAllPokemons } from "../project/Pokemon";

export const FavoritesScreen = () => {
  const { favorites } = useBaseStore();

  return (
    <AppScreen header={{ title: "Pokemon Favorites" }}>
      <img
        src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
        alt="PokeAPI"
        width="60%"
      />
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/f/fd/A_star.png"
        alt="Star"
        width="10%"
      />
      {!favorites && <p>You have no favorites. Go your back to your last page and select your favorite pokemons!</p>}
      {favorites && <DrawAllPokemons pokemons={favorites}/>}
    </AppScreen>
  );
};
