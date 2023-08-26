import { configureStore, createSlice } from '@reduxjs/toolkit'
import { useSelector, TypedUseSelectorHook } from 'react-redux'

//ao dar um console.log na action temos a seguinte estrutura:
//  { type: 'todo/add', payload : 'Qualquer coisa' }
// o type é: 'reducer /action do reducer' 
// o playload é o conteúdo que eu passo no disparo (dispatch) na action


const todoSlice = createSlice({ // a slice is a chunk of a state
  name: 'todo',
  initialState: ['Fazer café', 'estudar redux'],

  reducers: {
    add: (state, action) => {
      state.push(action.payload.newTodo)
    }

  }
})

export const store = configureStore({
  reducer: {
    todo: todoSlice.reducer,
  }
})

export const { add } = todoSlice.actions

export type RootState = ReturnType<typeof store.getState>
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector