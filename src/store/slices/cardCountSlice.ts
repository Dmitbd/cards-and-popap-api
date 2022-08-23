import { createSlice, PayloadAction } from "@reduxjs/toolkit"

// количество карточек для отрисовки

type CardCount = number

type CardCountState = CardCount

const initialState: CardCountState = 3

const cardCountSlice = createSlice({
  name: 'cardCount',
  initialState,
  reducers: {
    increaseCardsCount(state, action: PayloadAction<CardCount>) {
      return state = state + action.payload
    }
  }
})

export const { increaseCardsCount } = cardCountSlice.actions

export default cardCountSlice.reducer
