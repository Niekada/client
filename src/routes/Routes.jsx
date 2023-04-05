import { Navigate, Route, Routes as RoutesWrapper } from "react-router-dom";
import { authLayoutRoutes, mainLayoutRoutes } from "./const";

import { UserContext } from "../contexts/UserContext";
import { useContext } from "react";
import TopBar from "../components/TopBar/TopBar";

const Routes = () => {
  const { isLoggedIn } = useContext(UserContext);
  // const { routes } = isLoggedIn ? mainLayoutRoutes : authLayoutRoutes;
  const { routes } = mainLayoutRoutes;

  return (
    <RoutesWrapper>
      {routes.map(({ path, Component }) => (
        <Route
          key={path}
          path={path}
          element={
            <div>
              <TopBar />
              <Component />
            </div>
          }
        />
      ))}
      <Route
        path="*"
        element={
            <Navigate to={{ pathname: "/" }} />
        }
      />
    </RoutesWrapper>
  );
};

export default Routes;
