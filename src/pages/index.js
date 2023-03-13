import IndexLayout from "../layouts/IndexLayout/IndexLayout";
import MainLayout from "../layouts/MainLayout/MainLayout";
import Index from "./Index/Index";
import Register from "./Register/Register";
import SignIn from "./SignIn/SignIn";
import NotFound from "./NotFound/NotFound";
import FormMangaPage from "./FormMangaPage/FormMangaPage";
import AuthorForm from "./AuthorForm/AuthorForm";
import Author from "./Author/AuthorPage";
import ChapterForm from "./FormChapter/FormChapter";
import { Routes, Route } from "react-router-dom";

export const router = (
  <Routes>
    <Route path="/" element={<IndexLayout />}>
      <Route path="/" element={<Index />} />
      <Route path="/author-form" element={<AuthorForm />} />
      <Route path="/author/:id" element={<Author />} />
      <Route path="/*" element={<NotFound />} />
    </Route>
    <Route path="/" element={<MainLayout />}>
      <Route path="/signup" element={<Register />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/mangas" element={<FormMangaPage />} />
      <Route path="/chapter-form/:manga_id" element={<ChapterForm />} />
      <Route path="/*" element={<NotFound />} />
    </Route>
  </Routes>
);

export default router;

