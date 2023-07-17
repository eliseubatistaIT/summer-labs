import produce from "immer";
import { createJSONStorage } from "zustand/middleware";
import { StoreHelper } from "../store.helper";
import { Pokemon } from "src/screens/project/Pokemon";

export interface BaseState {
  isLoading: boolean;
}

const initialState: BaseState = {
  isLoading: false,
  //favorites: [],
};

interface UseBaseStoreOutput extends BaseState {
  setIsLoading: (value: boolean) => void;
  //setFavorites: (value: number) => void;
  //TODO: Create remove favorite
}

export const useBaseStore = StoreHelper.createStore<UseBaseStoreOutput>(
  (set) => ({
    ...initialState,
    setIsLoading: function (value: boolean) {
      set(
        produce((state: BaseState) => ({
          ...state,
          isLoading: value,
        })),
        false,
        "setIsLoading"
      );
    },
    // setFavorites: function (value: number) => {
    //   set(
    //     produce((state: BaseState) => ({
    //       ...state,
    //       favorites: value,
    //       // se o valor já existe, apaga o pokemon
    //       // se não existe, adiciona-se 
    //     })),
    //     false,
    //     "setIsLoading"
    //   );
    // },
  }),
  "Base",
  createJSONStorage(() => sessionStorage)
);
