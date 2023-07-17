import { Route, Routes } from "react-router-dom";
import {
  Challenge1,
  Challenge2,
  Challenge2_5,
  HomeScreen,
  PokeDetails,
  Project,
} from "@screens";
import { ScreenPaths } from "@constants";
import React, { useState } from "react";
import { useHistoryStore } from "@store";
import { useCustomNavigation } from "@hooks";
import { GlobalLoader } from "@components";
import { Pokemon } from "./screens/project/Pokemon";

export const App = () => {
  const { goTo } = useCustomNavigation();
  const { history } = useHistoryStore();
  const [pokemon, setPokemon] = useState<Pokemon | undefined>(undefined);

  function handlePokemonChange(e: any) {
    setPokemon(e.target);
  }

  React.useEffect(() => {
    console.log("App started");

    if (history.length < 1) {
      goTo(ScreenPaths.home);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [history]);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
        // overflow: "hidden",
      }}
    >
      <Routes>
        <Route path={ScreenPaths.home} element={<HomeScreen />} />
        <Route path={ScreenPaths.challenge1} element={<Challenge1 />} />
        <Route path={ScreenPaths.challenge2} element={<Challenge2 />} />
        <Route path={ScreenPaths.challenge2_5} element={<Challenge2_5 />} />
        <Route path={ScreenPaths.project.pokeapi} element={<Project />} />
        <Route
          path={ScreenPaths.project.pokedetails}
          element={<PokeDetails props={pokemon}/>}
        />
      </Routes>
    </div>
  );
};

export default App;
