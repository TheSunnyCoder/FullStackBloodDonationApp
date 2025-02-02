/*import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import Donors from "./pages/Donors";
import Prospects from "./pages/Prospects";
import Menu from "./components/Menu";
import Prospect from "./pages/Prospect";
import Donor from "./pages/Donor.jsx";
import NewDonor from "./pages/NewDonor";

function App() {
  const Layout = () => {
    return (
      <div className="flex">
        <div>
          <Menu />
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    );
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/admin",
      element: user.currentUser ? <Layout /> : <Navigate to="/login" />,
      children: [
        {
          path: "/admin",
          element: <Admin />,
        },
        {
          path: "/admin/donors",
          element: <Donors />,
        },
        {
          path: "/admin/prospects",
          element: <Prospects />,
        },
        {
          path: "/admin/prospect/:id",
          element: <Prospect />,
        },
        {
          path: "/admin/newdonor",
          element: <NewDonor />,
        },
        {
          path: "/admin/donor/:id",
          element: <Donor />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

*/

import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import Donors from "./pages/Donors";
import Prospects from "./pages/Prospects";
import Menu from "./components/Menu";
import Prospect from "./pages/Prospect";
import Donor from "./pages/Donor";
import NewDonor from "./pages/NewDonor";

function AdminLayout() {
  return (
    <div className="flex">
      <div>
        <Menu />
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/admin",
    element: <AdminLayout />, // Separate layout for Admin
    children: [
      {
        index: true, // Means `/admin` itself
        element: <Admin />,
      },
      {
        path: "donors",
        element: <Donors />,
      },
      {
        path: "prospects",
        element: <Prospects />,
      },
      {
        path: "prospect/:id",
        element: <Prospect />,
      },
      {
        path: "newdonor",
        element: <NewDonor />,
      },
      {
        path: "donor/:id",
        element: <Donor />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;





