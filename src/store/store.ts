import { configureStore } from '@reduxjs/toolkit'
import cardCountReduser from './slices/cardCountSlice'
import cardDataReducer from './slices/cardDataSlice'
import cardsReduser from './slices/cardsSlice'
import popupOpenReducer from './slices/popupOpenSlice'

const store = configureStore({
  reducer: {
    cards: cardsReduser,
    cardData: cardDataReducer,
    cardsCount: cardCountReduser,
    popupOpener: popupOpenReducer,
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
