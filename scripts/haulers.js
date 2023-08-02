import { getHaulers, getShips } from "./database.js";

const haul = document.querySelector("#container2");

export const HaulerList = () => {
  let haulerHTML = "<ul><h2>Hauling Ships</h2>";
  const haulers = getHaulers();
  for (const hauler of haulers) {
    haulerHTML += `<li data-type="number" data-id="${hauler.id}">${hauler.name}</li>`;
  }

  haulerHTML += "</ul>";

  return haulerHTML;
};

haul.innerHTML = HaulerList();

document.addEventListener("click", (clickEvent) => {
  const itemClicked = clickEvent.target;

  if (itemClicked.dataset.type === "number") {
    const haulerId = itemClicked.dataset.id;
    let shipCounter = 0;
    const shippingShips = getShips();
    
    for (const ship of shippingShips) {
      if (parseInt(haulerId) === ship.haulerId) {
        shipCounter++;
      }
    }
    window.alert(`This hauler is carrying ${shipCounter} shipping ships`);

  }
});

