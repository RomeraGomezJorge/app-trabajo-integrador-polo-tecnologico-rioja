import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Defino la forma del state que será gestionado por el slice.
export interface LocationSearchState {
  name: string;
}

// Estado inicial es una cadena vacia indicando que no se aplican filtros
const initialState: LocationSearchState = {
  name: "",
};


export const locationSearchSlice = createSlice({
  name: "locationSearch",
  initialState,
  reducers: {
    // Actualizo el state con la información proporcionada en action.payload 
    // estableciendo un filtro de busqueda
    setSearch: (_, action: PayloadAction<LocationSearchState>) => {
      return { ...action.payload }
      
    },
    //  Reseteo la propiedad name del state para mostrar todos los elementos.
    cleanSearch: (state) => {
      state.name = "";
    },
  },
});

export const { setSearch, cleanSearch } = locationSearchSlice.actions;

// Es el reducer generado por createSlice que manejará las acciones(setSearch, cleanSearch) definidas en el slice.
const locationSearchReducer = locationSearchSlice.reducer;
export default locationSearchReducer;
