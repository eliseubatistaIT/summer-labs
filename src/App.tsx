import { Route, Routes } from "react-router-dom";
import { Screen2 } from "./screens";
import { ScreenPaths } from "./constants";
import { Screen1 } from "./screens/screen1";

export const App = () => {
  return (
    <div
      style={{
        width: "100%",
        minHeight: "100%",
        overflowX: "hidden",
        overflowY: "auto",
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
