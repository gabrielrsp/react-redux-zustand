import { configureStore } from '@reduxjs/toolkit'
import { useSelector, TypedUseSelectorHook } from 'react-redux'
import { player } from './slices/player'

//ao dar um console.log na action temos a seguinte estrutura:
//  { type: 'todo/add', payload : 'Qualquer coisa' }
// o type é: 'reducer /action do reducer' 
// o playload é o conteúdo que eu passo no disparo (dispatch) na action


export const store = configureStore({
  reducer: {
    player
  }
})


export type RootState = ReturnType<typeof store.getState>
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector