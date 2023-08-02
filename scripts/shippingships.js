import { getShips, getHaulers } from "./database.js";

const ships = document.querySelector("#container3");
const ship = getShips();

export const ShippingShipsList = () => {
  let shipHTML = "<ul><h2>ShippingShip Ships</h2>";

  for (const ships of ship) {
    shipHTML += `<li data-id="${ships.id}" data-name="${ships.name}" data-type="${ships.haulerId}">${ships.name}`;
  }

  shipHTML += "</ul>";

  return shipHTML;
};

ships.innerHTML = ShippingShipsList();

document.addEventListener("click", (clickEvent) => {
  const itemClicked = clickEvent.target;
  const ship = itemClicked.dataset.type;
  const hauler = getHaulers();
  for (const boat of hauler) {
    if (boat.id === parseInt(ship)) {
      window.alert(
        `${itemClicked.dataset.name} is being hauled by ${boat.name}`
      );
    }
  }
});
