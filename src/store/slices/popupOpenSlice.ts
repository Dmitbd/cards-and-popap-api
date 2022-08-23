import { createSlice, PayloadAction } from "@reduxjs/toolkit"

// данные открытия/закрытия попапа

type PopupIsOpen = boolean

type PopupIsOpenState = PopupIsOpen

const initialState: PopupIsOpenState = false

const popupOpenSlice = createSlice({
  name: 'popupOpenSlice',
  initialState,
  reducers: {
    popupWithCardIsOpen(state, action: PayloadAction<boolean>) {
      return state = action.payload
    }
  }
})

export const { popupWithCardIsOpen } = popupOpenSlice.actions

export default popupOpenSlice.reducer
