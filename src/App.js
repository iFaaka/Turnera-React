import { useState } from "react";
import "./App.css";
import { Turnera } from "./Componentes/Turnera";

function App() {
  const [lightMode, setLightMode] = useState(false);
  return (
    <div className={`${lightMode === false ? "light" : "dark"} app-container`}>
      <Turnera lightMode={lightMode} setLightMode={setLightMode} />
    </div>
  );
}

export default App;
