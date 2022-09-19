import React from "react";
import { createRoot } from "react-dom/client";
import { NativeBaseProvider, extendTheme } from "native-base";

import App from "./App";
import reportWebVitals from "./reportWebVitals";

const theme = extendTheme({
  colors: {
    Red: `hsl(0, 100%, 74%)`,
    Green: `hsl(154, 59%, 51%)`,
    Blue: `hsl(248, 32%, 49%)`,
    DarkBlue: `hsl(249, 10%, 26%)`,
    GrayishBlue: `hsl(246, 25%, 77%)`,
  },
  config: {
    initialColorMode: "light",
  },
  fonts: {
    heading: "Poppins",
    body: "Poppins",
    mono: "Poppins",
  },
});

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NativeBaseProvider theme={theme}>
      <App />
    </NativeBaseProvider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
