import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "../Pages/Home";
import RootLayout from "../Pages/Layout";
import TrackingShipment from "../Pages/TrackingShipment";
import ErrorHandler from "../Components/Errors/ErrorHandler";

export interface IUser {
  email: string;
  password: string;
}

const Router = () => {
  // create router with all routes
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        {/* root layout */}
        <Route
          path="/"
          element={<RootLayout />}
          errorElement={<ErrorHandler />}
        >
          <Route index element={<Home />} />
          <Route path="tracking-shipment" element={<TrackingShipment />} />
        </Route>
      </>
    )
  );

  return router;
};

export default Router;
