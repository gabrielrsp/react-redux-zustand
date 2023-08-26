import { configureStore, createSlice } from '@reduxjs/toolkit'

const todoSlice = createSlice({ // a slice is a chunk of a state
  name: 'todo',
  initialState: ['Fazer café', 'estudar redux'],

  reducers: {}
})

export const store = configureStore({
  reducer: {
    todo: todoSlice.reducer,
  }
})