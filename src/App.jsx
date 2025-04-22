import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import {
  Budgets,
  Login,
  Overview,
  Pots,
  RecuringBills,
  Register,
  Transactions,
} from "./pages";

import { ProtectedRoutes } from "./components";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/config";
import { useEffect } from "react";
import { isAuthReady, login } from "./app/features/userSlice";

function App() {
  const dispatch = useDispatch();
  const { user, authReady } = useSelector((store) => store.user);
  const routes = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoutes user={user}>
          <MainLayout />
        </ProtectedRoutes>
      ),
      children: [
        {
          index: true,
          element: <Overview />,
        },
        {
          path: "/budgets",
          element: <Budgets />,
        },
        {
          path: "/overview",
          element: <Overview />,
        },
        {
          path: "/pots",
          element: <Pots />,
        },
        {
          path: "/recuringBillss",
          element: <RecuringBills />,
        },
        {
          path: "/transactions",
          element: <Transactions />,
        },
      ],
    },
    {
      path: "/login",
      element: user ? <Navigate to="/" /> : <Login />,
    },
    {
      path: "/register",
      element: user ? <Navigate to="/" /> : <Register />,
    },
  ]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user.displayName && user.photoURL) {
        dispatch(login(user));
      }
      dispatch(isAuthReady());
    });
  }, []);
  return <>{authReady && <RouterProvider router={routes} />}</>;
}

export default App;
