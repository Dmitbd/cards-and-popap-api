import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Card } from "../../types/card"

// данные одной карточки

type CardData = Card

type CardDataState = CardData

const initialState: CardDataState = {
  about: '',
  age: 0,
  email: '',
  index: 0,
  name: '',
  phone: '',
  picture: '',
  _id: ''
}

const cardDataState = createSlice({
  name: 'cardData',
  initialState,
  reducers: {
    getCardData(state, action: PayloadAction<Card>) {
      return state = action.payload
    }
  }
})

export const { getCardData } = cardDataState.actions

export default cardDataState.reducer
