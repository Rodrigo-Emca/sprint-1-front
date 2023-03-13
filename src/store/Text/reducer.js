import { createReducer } from "@reduxjs/toolkit"
import textActions from "./actions"

const { capture } = textActions

const initialState = {
    text: ''
}

let alertReducer = createReducer(
    initialState,
    (builder) => builder
        .addCase(
            capture,
            (state,action) => {
                //action.payload.text = action.payload.text.trim()
                let newState = {
                    ...state,
                    text: action.payload.text.trim()
                }
                return newState
            }
        )
)

export default alertReducer