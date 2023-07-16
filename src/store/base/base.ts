import produce from "immer";
import { createJSONStorage } from "zustand/middleware";
import { StoreHelper } from "../store.helper";

export interface BaseState {
  favorites: number[];
}

const initialState: BaseState = {
  favorites: [],
};

interface UseBaseStoreOutput extends BaseState {
  addFavorite: (id: number) => void;
  //TODO: Create remove favorite
}

export const useBaseStore = StoreHelper.createStore<UseBaseStoreOutput>(
  (set) => ({
    ...initialState,
    addFavorite: function (id: number) {
      set(
        produce((state: BaseState) => ({
          ...state,
          favorites: [...state.favorites, id],
        })),
        false,
        "addFavorite"
      );
    },
  }),
  "Base",
  createJSONStorage(() => localStorage)
);
