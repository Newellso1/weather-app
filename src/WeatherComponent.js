import { useState, useEffect } from "react";

import DropdownMenu from "./DropdownMenu";

export default function WeatherComponent({ city, setCity }) {
  return (
    <div className="weather-app">
      <DropdownMenu city={city} setCity={setCity} />
    </div>
  );
}
