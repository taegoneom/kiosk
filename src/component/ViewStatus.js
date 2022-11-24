
import create from 'zustand';

      // set method로 상태 변경 가능
      const ViewStatus = create(set => ({
        value: 1,
        SetOrderSelect:() => set({ value: 1 }),
        SetToGo: () => set({ value: 2 }),
        SetForHere: () => set({ value: 3 })
      }));
      
      //const { value, setinput } = viewstatus();


export const AppViewStatus = ViewStatus;