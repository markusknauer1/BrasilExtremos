import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "../pages/home";
import { Acess } from "../pages/acessoUsuario/index.tsx";
import { SocialAction } from "../pages/AcaoSocial/index.tsx";
import { Market } from "../pages/Loja/index.tsx";
import { Associates } from "../pages/associados/index.tsx";
import { Schedule } from "../pages/agenda/index.tsx";
import { ContactUs } from "../pages/FaleConsco/index.tsx";
import { UserProfile } from "../pages/perfilUsuario/index.tsx";
import { UserRegistration } from "../pages/perfilUsuario/dadosCadastrais/index.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/pages/acess",
    element: <Acess />,
  },
  {
    path: "/pages/UserProfile",
    element: <UserProfile />,
  },
  {
    path: "/pages/UserRegistration",
    element: <UserRegistration />,
  },
  {
    path: "/pages/socialAction",
    element: <SocialAction />,
  },
  {
    path: "/pages/Market",
    element: <Market />,
  },
  {
    path: "/pages/Associates",
    element: <Associates />,
  },
  {
    path: "/pages/Schedule",
    element: <Schedule />,
  },
  {
    path: "/pages/ContactUs",
    element: <ContactUs />,
  },
]);

export function Routes() {
  return <RouterProvider router={router} />;
}
