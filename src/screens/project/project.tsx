import { AppScreen, CustomButton, PokemonCard } from "@components";
import { useProjectHelper } from "./project.hook";

interface PokemonListResultItem {
  name: string;
  url: string;
}

interface PokemonListResult {
  results: PokemonListResultItem[];
}

export const Project = ({}) => {
  const {
    goToFavorites,
    goToNamePokemon,
    goToListPokemons
  } = useProjectHelper();

  // console.log(pokemons[1]?.stats);

  return (
    <AppScreen header={{ title: "Project - Poke API - REACT" }}>
      <img
        src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
        alt="PokeAPI"
        width="55%"
      />
      <p>---------------------------------</p>
      <h5>Welcome to the Pokedex!</h5>
      <p>---------------------------------</p>
      <CustomButton text="Show Favorites" onClick={goToFavorites} />
      <p>---------------------------------</p>
      {/* <div
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
        <h3><b>Only 20 pokemons are shown at the same time</b></h3>
        <h4>Use the search bar to find the pokemon(s) you want to see</h4>{" "}
        <h4>OR / AND</h4>{" "}
        <h4>Write in the 2 spaces below to search for the pokemons you want</h4>
        <h4> </h4>
        <h4></h4>
      </div>
      <p>---------------------------------</p>
      <input
        type="text"
        name="pokemonSearch"
        placeholder="Write the pokemon's name"
        onChange={handleSearchPokemonInputChange}
        value={searchPokemonWhatever}
      /> */}

      
      {/* <button
        onClick={() => {
          fetchPokemons();
        }}
      >
        See results
      </button> */}
      <CustomButton
        text="Search bar for single pokemon"
        onClick={() => {
          goToNamePokemon();
        }}
        styles={{ margin: "0 auto 10px auto" }}
      />
      <CustomButton
        text="Search list of pokemons"
        onClick={() => {
          goToListPokemons();
        }}
        styles={{ margin: "0 auto 10px auto" }}
      />
    </AppScreen>
  );
};
