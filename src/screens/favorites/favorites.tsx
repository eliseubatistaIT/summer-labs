import { AppScreen, PokemonCard } from "@components";
import { useBaseStore } from "@store";

export const FavoritesScreen = () => {
  const { favorites } = useBaseStore();

  return (
    <AppScreen header={{ title: "Pokemon Favorites" }}>
      <img
        src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
        alt="PokeAPI"
        width="55%"
      />
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/f/fd/A_star.png"
        alt="Star"
        width="10%"
      />
      {(favorites===undefined || favorites.length == 0) && (
        <>
          <p>-------------------------------</p>
          <p>
            You have no favorites. Go your back to your last page and select
            your favorite pokemons!
          </p>
          <p>-------------------------------</p>
        </>
      )}
      <div style={{ width: "100%", gap: "20px" }}>
        {favorites.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} type="small" />
        ))}
      </div>
    </AppScreen>
  );
};
