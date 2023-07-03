import { Route, Routes } from "react-router-dom";
import {
  Challenge1,
  Challenge2,
  Challenge2_5,
  HomeScreen,
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
        maxWidth: "390px",
        maxHeight: "844px",
        border: "10px solid #000000",
        borderBottom: "55px solid #000000",
        borderTop: "35px solid #000000",
        borderRadius: "15px",
        background: "#ffffff",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Routes>
        <Route path={ScreenPaths.home} element={<HomeScreen />} />
        <Route path={ScreenPaths.challenge1} element={<Challenge1 />} />
        <Route path={ScreenPaths.challenge2} element={<Challenge2 />} />
        <Route path={ScreenPaths.challenge2_5} element={<Challenge2_5 />} />
        <Route path={ScreenPaths.project} element={<Project />} />
      </Routes>
    </div>
  );
};

export default App;
