import { createBrowserRouter } from "react-router-dom";
import { SongsByAlbum } from "./albums/SongsByAlbum";
import { Bands } from "./bands/Bands";
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
        path: "/bands/Bands",
        element: <Bands />,
      },
      {
        path: "/albums/SongsByAlbum",
        element: <SongsByAlbum />,
      },
    ],
  },
]);
