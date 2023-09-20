import React from "react";
import "./App.css";
import RouterConfig from "./setup/routes/RouterConfig";
import { ThemeProvider } from "@mui/material";
import { theme } from "./types/theme";
import { Provider } from "react-redux";
import store from "./setup/stores";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <div className="App">
          <RouterConfig />
        </div>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
