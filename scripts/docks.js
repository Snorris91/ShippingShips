import { getDocks, getHaulers } from "./database.js";

const dock = document.querySelector("#container1");
const docks = getDocks();
export const DockList = () => {
  

  let docksHTML = "<ul><h2>Docks</h2>";

  for (const dock of docks) {
    docksHTML += `<li data-type="dock" data-id="${dock.id}" data-name="${dock.location}">${dock.location} can hold ${dock.volume} million tons of cargo.</li>`;
  }

  docksHTML += "</ul>";

  return docksHTML;
};

dock.innerHTML = DockList();


document.addEventListener(
  "click",
  (clickedDock) => {
const dockClicked = clickedDock.target
const dockId = dockClicked.dataset.id

    if ( dockClicked.dataset.type === "dock"){
      const hauler = getHaulers()
      let string = ""
      for (const haul of hauler) {
        if (parseInt(dockId) === haul.dockId)
        string += `${haul.name}, `
      }
       if (string){


      window.alert(`This is ${dockClicked.dataset.name} and it is unloading ${string}`)
    }
       else if (string === ""){
        window.alert(`This is ${dockClicked.dataset.name} and it is unloading nothing`)
      }}
  }
)

// document.addEventListener("click", (clickEvent) => {
//   const itemClicked = clickEvent.target;
//   const docks = getDocks()

// }});

