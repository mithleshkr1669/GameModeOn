import { configureStore } from '@reduxjs/toolkit'
import clickReducer from './features/handleClick'

export const makeStore = () => {
  return configureStore({
    reducer: {
    clickFunction:clickReducer
    },
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']