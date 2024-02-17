import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "../Pages/Home";
import RootLayout from "../Pages/Layout";
import TrackingShipment from "../Pages/TrackingShipment";
import ErrorHandler from "../Components/Errors/ErrorHandler";
import PageNotFound from "../Pages/NotFoundPage";
import ErrorShipment from "../Components/ErrorShipment/ErrorShipment";

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
          <Route path="/tracking-shipment/:id" element={<TrackingShipment />} />
          <Route path="/error-shipment" element={<ErrorShipment />} />
        </Route>

        <Route path="*" element={<PageNotFound />} />
      </>
    )
  );

  return router;
};

export default Router;
