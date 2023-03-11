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
                let newState = {
                    ...state,
                    text: action.payload.text
                }
                return newState
            }
        )
)

export default alertReducer