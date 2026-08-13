import { createBrowserRouter } from "react-router-dom";
import { SongsByAlbum } from "./albums/SongsByAlbum";
import { Artists } from "./Artists";
import { RootLayout } from "./components/layout/RootLayout";
import { Home } from "./Home";

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/artists",
        element: <Artists />,
      },
      {
        path: "/albums/SongsByAlbum",
        element: <SongsByAlbum />,
      },
    ],
  },
]);
