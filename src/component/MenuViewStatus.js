
import create from 'zustand';

// set method로 상태 변경 가능
const MenuViewStatus = create(set => ({
  valueofmenu: 1,
  SetSuggest:() => set({ valueofmenu: 1 }),
  SetCake:() => set({ valueofmenu: 2 }),
  SetNewMenu:() => set({ valueofmenu: 3 }),
  SetComboMenu:() => set({ valueofmenu: 4 }),
  SetCoffee:() => set({ valueofmenu: 5 }),
  SetDecaf:() => set({ valueofmenu: 6 }),
  SetMilk:() => set({ valueofmenu: 7 }),
  SetJuiceDrink:() => set({ valueofmenu: 8 }),
  SetSmoothie:() => set({ valueofmenu: 9 }),
  SetTeaAde:() => set({ valueofmenu: 10 }),
  SetBread:() => set({ valueofmenu: 11 }),
  SetDessert:() => set({ valueofmenu: 12 }),
  SetMD:() => set({ valueofmenu: 13 })
}));


export const MenuStatus = MenuViewStatus;