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
import React from "react";
import { useBaseStore } from "./store/base";
import { useCustomNavigation } from "./hooks/useCustomNavigation";
import { useHistoryStore } from "./store/history";

export const App = () => {
  const { goTo } = useCustomNavigation();
  const { history } = useHistoryStore();

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
          element={<PokeDetails />}
        />
      </Routes>
    </div>
  );
};

export default App;
