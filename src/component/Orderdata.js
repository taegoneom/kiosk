import create from "zustand";

// set method로 상태 변경 가능
const Orderdata = create((set) => ({
  menuname: "",
  setmenuname: (input) => set({ menuname: input }),

  menuprice: 0,
  setmenuprice: (input) => set({ menuprice: input }),
  menutype: 0,
  setmenutype: (input) => set({ menutype: input }),

  menuid: 0,
  setmenuid: (input) => set({ menuid: input }),

  receipt: [],
  setreceipt: (input) => set({ receipt: input }),

  sum: 0,
  setsum: (input) => set({ sum: input }),
  optionitem: 1,
  setoptionitem: () => set({ optionitem: 1 }),
  increaseoptionitem: () =>
    set((state) => ({ optionitem: state.optionitem + 1 })),
  decreaseoptionitem: () =>
    set((state) => ({
      optionitem:
        state.optionitem >= 2 ? state.optionitem - 1 : state.optionitem,
    })),
  //1이하로안떨어지게

  optioniced: 0,
  setoptioniced: () => set({ optioniced: 0 }),
  increaseoptioniced: () =>
    set((state) => ({ optioniced: state.optioniced + 1 })),
  decreaseoptioniced: () =>
    set((state) => ({
      optioniced: state.optioniced === 0 ? 0 : state.optioniced - 1,
    })),

  optionhot: 0,
  setoptionhot: () => set({ optionhot: 0 }),
  increaseoptionhot: () => set((state) => ({ optionhot: state.optionhot + 1 })),
  decreaseoptionhot: () =>
    set((state) => ({
      optionhot: state.optionhot === 0 ? 0 : state.optionhot - 1,
    })),
  cshowtype: -1,
  setcshowtype: (input) => set({ cshowtype: input }),

  valueoflist: [],
  setvalueoflist: (input) => set({ valueoflist: input }),
}));

export const CustomOptions = Orderdata;

// setis_hot: (input) => set({ is_hot: input }), //true 면 hot음료 false면 iced음료
// setaddshot: (input) => set({ addshot: input }), //"기본" 0 "샷 추가" 1(500) "연한 샷"2
// setaddhazelnutsyrup: (input) => set({ addhazelnutsyrup: input }), //기본 || 헤이즐넛 시럽추가
// setaddcinnamonsyrup: (input) => set({ addcinnamonsyrup: input }), //기본 || 시나몬 시럽추가
// setchangelatteintosoymilk: (input) => set({ changelatteintosoymilk: input }), //"두유로변경"(무료)
// setchangesetdrinkintosoyormilk: (input) =>set({ changesetdrinkintosoyormilk: input }),// //0변경안함 1 두유 2 우유 (800원)
// changebeanintobanasignature: false,
// setchangebeanintobanasignature: (input) =>set({ changebeanintobanasignature200: input }),// //false"안함" true"바나 시그니처 원두로 변경" 200원
// setonlybanaricano_changebeanintobanasignature: (input) =>set({ onlybanaricano_changebeanintobanasignature: input }),// //false"안함" true"바나 시그니처 원두로 변경" 400원
// setaddwhippedcream: (input) => set({ addwhippedcream: input }), //500원추가
// setsweetness: (input) => set({ sweetness: input }), //"기본"0 "더달게"1 "단맛줄임"
// setexcludesyruptomatoonly: (input) => set({ excludesyruptomato: input }), //true=syrup제외   "기본"||"시럽제외"
// setamountice: (input) => set({ amountice: input }), //"기본"0 "얼음많이"1 "얼음적게"2 "얼음없이"3
// setamountwater: (input) => set({ amountwater: input }), //기본0 "물양적게"1 : 0,"물양많이"2
// setexcludetopping: (input) => set({ excludetopping: input }), //기본 true시 토핑제외
// setadddalgona: (input) => set({ adddalgona: input }), //"안함"false "달고나 추가"true 500원

//여러개를 아코디언매뉴로 구현해야됨. 온도 선택시 메뉴명:HOT/ICED로 메뉴선택팝업이뜸 그때 옵션설정. 제공할 옵션은.....HOT ICED로 분기를 나누어야할듯
