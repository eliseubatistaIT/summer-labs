import { AppScreen } from "@components";

export const FavoritesScreen = () => {
    return(
        <AppScreen header={{ title: "Pokemon Favourites" }}>
        <img
          src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
          alt="PokeAPI"
          width="60%"
        />
      </AppScreen>
    );
}