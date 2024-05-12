import "./App.css";
import AppLayout from "./layouts/app-layout";
import Home from "./pages/home";
import Search from "./pages/search";
import GifPage from "./pages/single-gif";
import Favorites from "./pages/favorites";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import GifProvider from "./context/gif-context";
import Category from "./pages/Category";

const routes = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/:category",
        element: <Category />,
      },
      {
        path: "/search/:query",
        element: <Search />,
      },
      {
        path: "/:type/:slug",
        element: <GifPage />,
      },
      {
        path: "/favorites",
        element: <Favorites />,
      },
    ],
  },
]);
function App() {
  return (
    <GifProvider>
      <RouterProvider router={routes} />
    </GifProvider>
  );
}

export default App;
