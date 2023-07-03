import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { css, Global } from "@emotion/react";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Global
      styles={css`
        * {
          margin: 0;
          padding: 0;
        }

        html,
        body {
          width: 100%;
          height: 100%;
          font-family: "Poppins", sans-serif;
        }

        #root {
          width: 100%;
          height: 100%;
          background: #f7e5d2;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        div {
          display: flex;
          flex-direction: column;
          box-sizing: border-box;
        }

        p {
          color: inherit;
          font-size: 16px;
        }
      `}
    />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
