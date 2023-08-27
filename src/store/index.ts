import { configureStore, createSlice } from '@reduxjs/toolkit'
import { useSelector, TypedUseSelectorHook } from 'react-redux'

//ao dar um console.log na action temos a seguinte estrutura:
//  { type: 'todo/add', payload : 'Qualquer coisa' }
// o type é: 'reducer /action do reducer' 
// o playload é o conteúdo que eu passo no disparo (dispatch) na action


export const store = configureStore({
  reducer: {

  }
})


export type RootState = ReturnType<typeof store.getState>
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector