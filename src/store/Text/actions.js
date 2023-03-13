import { createAction } from "@reduxjs/toolkit"

let capture = createAction( /* defino una accion para controlar que la alerta se abra */
    'capture',
    ({ text })=> { return { payload: { text } }}
)

const textActions = { capture }
export default textActions