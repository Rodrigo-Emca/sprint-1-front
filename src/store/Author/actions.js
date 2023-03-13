import { createAction } from "@reduxjs/toolkit";

const open = createAction("open", ({ icon, text, visible }) => {
    return { payload: { icon, text, visible } };
  });
  