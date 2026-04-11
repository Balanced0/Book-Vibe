import { createBrowserRouter } from "react-router";
import MainLayout from '../layout/MainLayout';
import Homepage from '../pages/homepage/Homepage';
import Books from '../pages/books/Books';
import ErrorPage from "../pages/errorPage/ErrorPage";
import BookDetails from "../pages/bookDetails/BookDetails";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [{
        index: true,
        element: <Homepage></Homepage>,
        },
        {
        path: "/books",
        element: <Books></Books>,
        },
        {
          path: "/bookDetails/:id",
          element: <BookDetails></BookDetails>,
          loader: ()=> fetch("/booksData.json"),
        }
    ],
    errorElement: <ErrorPage></ErrorPage>
  },
]);