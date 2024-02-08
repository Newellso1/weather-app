import WeatherComponent from "./WeatherComponent";
import { useState } from "react";

function App() {
  const [city, setCity] = useState("Select a City");
  return (
    <div className="app-container">
      <WeatherComponent city={city} setCity={setCity} />
    </div>
  );
}

export default App;
