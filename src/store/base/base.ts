import produce from "immer";
import { createJSONStorage } from "zustand/middleware";
import { StoreHelper } from "../store.helper";

export interface BaseState {
  theme: "light" | "dark";
}

const initialState: BaseState = {
  theme: "light",
};

interface UseBaseStoreOutput extends BaseState {
  updateBaseStore: (data: Partial<BaseState>) => void;
}

export const useBaseStore = StoreHelper.createStore<UseBaseStoreOutput>(
  (set) => ({
    ...initialState,
    updateBaseStore: function (data: Partial<BaseState>) {
      set(
        produce((state: BaseState) => ({ ...state, ...data })),
        false,
        "updateBaseStore"
      );
    },
  }),
  "Base",
  createJSONStorage(() => localStorage)
);
