import { AppScreen } from "@components";
import { Pokemon } from "../project/Pokemon";

export const PokeDetails = (pokemons: Pokemon[]) => {
  return <AppScreen header={{ title: "RESULTS" }}>
    <img
        src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
        alt="PokeAPI"
        width="60%"
      />
      <div
        style={{
          width: "100%",
          height: "100%",
          maxWidth: "320px",
          maxHeight: "175px",
          border: "0px solid #bee7fa",
          borderBottom: "23px solid #bee7fa",
          borderTop: "23px solid #bee7fa",
          borderRadius: "15px",
          background: "#bee7fa",
          position: "relative",
          overflow: "hidden",
          textAlign: "center",
          marginLeft: "auto",
          marginRight: "auto",
        }}></div>
  </AppScreen>;
};
