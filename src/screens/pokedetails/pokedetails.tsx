import { AppScreen } from "@components";
import { useProjectHelper } from "../project/project.hook";


export const PokeDetails = () => {

  return (
    <>
      <AppScreen header={{ title: "Pokemon Details" }}>
        <img
          src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
          alt="PokeAPI"
          width="60%"
        />
      </AppScreen>
    </>
  );
};
