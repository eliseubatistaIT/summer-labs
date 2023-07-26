import { AppScreen, CustomButton, PokemonCard } from "@components";
import { useProjectHelper } from "../project/project.hook";

export const SearchName = () => {
  const {
    fetchPokemons,
    handleInitialChange,
    searchPokemonWhatever,
    handleSearchPokemonInputChange,
    initial,
    goToFavorites,
    pokemons_full,
  } = useProjectHelper();

  

  return (
    <AppScreen header={{ title: "Pokemon Details" }}>
      <img
        src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
        alt="PokeAPI"
        width="55%"
      />
      <p>---------------------------------</p>
      <CustomButton text="Show Favorites" onClick={goToFavorites} />
      <p>---------------------------------</p>
      <div
        style={{
          width: "100%",
          height: "100%",
          maxWidth: "320px",
          maxHeight: "70px",
          border: "0px solid #bee7fa",
          borderBottom: "15px solid #bee7fa",
          borderTop: "15px solid #bee7fa",
          borderRadius: "15px",
          background: "#bee7fa",
          position: "relative",
          overflow: "hidden",
          textAlign: "center",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <h4>Use the search bar to find the pokemon(s) you want to see</h4>{" "}
      </div>
      <p>---------------------------------</p>
      <input
        type="text"
        name="pokemonSearch"
        placeholder="Write the pokemon's name"
        onChange={handleSearchPokemonInputChange}
        value={searchPokemonWhatever}
      />
      <p>---------------------------------</p>
      <CustomButton
        text="See Results"
        onClick={() => {
          fetchPokemons();
          handleInitialChange();
        }}
        styles={{ margin: "0 auto 10px auto" }}
      />
      {!initial && (
        <>
          <p>---------------------------------</p>
          <h4>Scroll through the page to see all the pokémons</h4>
          <p>---------------------------------</p>
          {/* <CustomButton
            text="Next page (só para testes)"
            onClick={() => {
              goToPokeDetails();
            }}
            styles={{ margin: "0 auto 10px auto" }}
          /> */}
          <div style={{ width: "100%", gap: "20px" }}>
            {pokemons_full.map((pokemon) => (
              <PokemonCard key={pokemon.id} pokemon={pokemon} type="small" />
            ))}
          </div>
        </>
      )}
    </AppScreen>
  );
};
