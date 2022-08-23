import axios from "axios"
import { getCards } from "../store/slices/cardsSlice"

const BASE_URL = '/nuxt/api/'

export const getCatdsAsync = async (dispatch: Function): Promise<void> => {
  try {
    const response = await axios.get(`${BASE_URL}`)
    dispatch(getCards(response.data))
  } catch (error) {
    console.log(error)
  }
}
