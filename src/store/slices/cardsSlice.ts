import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Card } from "../../types/card"

// хранит массив карточек

type CardsArray = Array<Card>

type CardsArrayState = CardsArray

const initialState: CardsArrayState = []

const cardsSlice = createSlice({
  name: 'cardsSlice',
  initialState,
  reducers: {
    getCards(state, action: PayloadAction<CardsArray>) {
      return state = action.payload
    }
  }
})

export const { getCards } = cardsSlice.actions

export default cardsSlice.reducer
