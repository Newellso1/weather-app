import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";
import MenuItem from "./MenuItem";

export default function DropdownMenu({ city, setCity }) {
  const [MenuButton, setMenuButton] = useState(false);

  const handleMenuItemClick = (selectedCity) => {
    setCity(selectedCity);
    setMenuButton(false);
  };

  const toggleMenu = () => {
    setMenuButton((open) => !open);
    setCity("Select a City");
  };

  const dropdownTop = {
    borderRadius: MenuButton ? "0.25em 0.25em 0 0 " : "0.25em",
  };

  return (
    <div className="drop-down">
      <div className="drop-down-top" style={dropdownTop}>
        <p>{city}</p>
        <FontAwesomeIcon
          className="menu-button"
          icon={faList}
          onClick={toggleMenu}
        />
      </div>
      <ul className="menu-list">
        {MenuButton ? (
          <>
            <MenuItem
              cityName="Leeds"
              onClick={() => handleMenuItemClick("Leeds")}
            />
            <MenuItem
              cityName="London"
              onClick={() => handleMenuItemClick("London")}
            />
            <MenuItem
              cityName="Manchester"
              onClick={() => handleMenuItemClick("Manchester")}
            />
            <MenuItem
              cityName="Edinburgh"
              onClick={() => handleMenuItemClick("Edinburgh")}
            />
            <MenuItem
              cityName="Cardiff"
              onClick={() => handleMenuItemClick("Cardiff")}
            />
            <MenuItem
              cityName="Dublin"
              onClick={() => handleMenuItemClick("Dublin")}
            />
          </>
        ) : (
          ""
        )}
      </ul>
    </div>
  );
}
