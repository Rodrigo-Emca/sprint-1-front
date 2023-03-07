import React from "react";
import { BrowserRouter, createBrowserRouter } from "react-router-dom";
import AuthorForm from "./AuthorForm/AuthorForm";
import Index from "./Index/Index";

export const router = createBrowserRouter([
  { path: "/", element: <Index /> },
  { path: "/author-form", element: <AuthorForm /> },
]);

function App() {
  return (
    <BrowserRouter>
      {router}
    </BrowserRouter>
  );
}

export default App;
