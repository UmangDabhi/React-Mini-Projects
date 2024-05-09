import React, { useState } from "react";
import WeatherApp from "./Components/Weather-App/weatherApp";
import TicTacToe from "./Components/TicTacToe/TicTacToe";

function App() {
  const [activeComponent, setActiveComponent] = useState(null);

  const handleComponentClick = (componentName) => {
    setActiveComponent(componentName);
  };

  return (
    <div className="bg-cyan-500">
      <div className="flex justify-end gap-3">
        <div
          className="bg-blue-300 p-2 px-4 rounded-md m-2"
          onClick={() => handleComponentClick("WeatherApp")}
        >
          Weather App
        </div>
        <div
          className="bg-blue-300 p-2 px-4 rounded-md m-2"
          onClick={() => handleComponentClick("TicTacToe")}
        >
          Tic Tac Toe
        </div>
      </div>
        {activeComponent === "WeatherApp" && <WeatherApp />}
        {activeComponent === "TicTacToe" && <TicTacToe />}
    </div>
  );
}

export default App;
