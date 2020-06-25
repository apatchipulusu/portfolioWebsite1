import React from "react";
import ButtonAppBar from "./components/nav";
import "./App.css";
import Main from "./pages/main";

function App() {
  return (
    <div className="App">
      <ButtonAppBar />
      <Main />
    </div>
  );
}

export default App;
