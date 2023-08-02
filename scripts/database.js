const database = {
  docks: [
    { id: 1, location: "Shanghai, China", volume: "43.5" },
    { id: 2, location: "Busan, South Korea", volume: "21.6" },
    { id: 3, location: "Rotterdam, The Netherlands", volume: "14.35" },
    { id: 4, location: "Antwerp, Belgium", volume: "12.04" },
  ],
  haulers: [
    { id: 1, name: "Boaty McBoaty", dockId: 2},
    { id: 2, name: "Tugg Boat" , dockId: 4},
    { id: 3, name: "Waste of Money" , dockId: 1},
    { id: 4, name: "January Bonus", dockId: 1},
  ],
  shippingShips: [
    { id: 1, name: "Serenity", haulerId: 1 },
    { id: 2, name: "Aquamarine", haulerId: 2 },
    { id: 3, name: "Wanderlust", haulerId: 4 },
    { id: 4, name: "Ocean Dream", haulerId: 3 },
    { id: 5, name: "Liberty", haulerId: 4 },
    { id: 6, name: "Island Paradise", haulerId: 3 },
    { id: 7, name: "Sea Breeze", haulerId: 1 },
    { id: 8, name: "Captain's Delight", haulerId: 2 },
    { id: 9, name: "Nautical Star", haulerId: 1 },
    { id: 10, name: "Mariner's Pride", haulerId: 4 },
  ],
};

export const getDocks = () => {
    return database.docks.map(dock => ({...dock}))
};

export const getHaulers = () => {
    return database.haulers.map(hauler => ({...hauler}))
};

export const getShips = () => {
    return database.shippingShips.map(ship => ({...ship}))
}

console.log(getShips())