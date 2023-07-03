import { Route, Routes } from "react-router-dom";
import { Screen2 } from "./screens";
import { ScreenPaths } from "./constants";
import { Screen1 } from "./screens/screen1";

export const App = () => {
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
        <Route path={ScreenPaths.screen1} element={<Screen1 />} />
        <Route path={ScreenPaths.screen2} element={<Screen2 />} />
      </Routes>
    </div>
  );
};

export default App;
