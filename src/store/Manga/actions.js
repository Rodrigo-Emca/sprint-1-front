import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const get_manga = createAsyncThunk(
    'get_manga',
    async({ inputId }) => {
        try {
            let response = await axios.get('http://localhost:8000/mangas/:id?_id=640a29d8aa914d6b7c58472b')
            console.log(response)
            return {
                manga: response
            }
        } catch (error) {
            console.log('No se ha podido traer el pedido')
            return {
                manga: []
            }
        }
    }
)

const actions = { get_manga }
export default actions