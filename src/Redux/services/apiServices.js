import axios from "axios";
import { setItems } from "../reducers/sidebarReducer";
const basePath = "https://fakestoreapi.com"





export const getItems = () => async (dispatch) => {
  try {
      const response = await axios.get(`${basePath}/products`)
      dispatch(setItems(response?.data))
      return response?.data
  } catch (error) {
      return error
  }
}
