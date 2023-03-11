import { createAction } from "@reduxjs/toolkit"

let captureSearch = createAction( /* defino una accion para controlar que la alerta se abra */
    'captureSearch',
    ({ text })=> { return { payload: { text } }}
)

const textActions = { captureSearch }
export default textActions