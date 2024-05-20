import UserRoot from "../Layout/UserRoot";
import AddPage from "../Pages/AddPage";
import Home from "../Pages/Home";

const routes = [
  {
    path: "/",
    element: <UserRoot />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/addpage",
        element: <AddPage />,
      },
    ],
  },
];

export default routes