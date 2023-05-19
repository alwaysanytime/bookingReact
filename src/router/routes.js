import { Navigate, createBrowserRouter } from "react-router-dom";
import PrivateLayout from "../layout/PrivateLayout";
import PublicLayout from "../layout/PublicLayout";
import SignUpPage from "../pages/SignUpPage";
import LoginPage from "../pages/LoginPage";
import NotFoundPage from "../pages/NotFoundPage";

import Overview from "../pages/dashboard/Overview";
import ManifestPage from "../pages/dashboard/Manifest";

import Rental from "../pages/product/Rental";
import Equipment from "../pages/product/Equipment";
import Seansonpage from "../pages/product/Seasonpage";
import Durationpage  from "../pages/product/Duration";
import Prices from "../pages/product/Prices";
import Availability from "../pages/product/Availability";
import Questions from "../pages/product/Questions";
import Advanced from "../pages/product/Advanced";

import Assetspage from "../pages/configuration/Assetspage";
import Emailpage from "../pages/configuration/Emailpage";
import Taxes from "../pages/configuration/Taxes";
import Tickets from "../pages/configuration/Tickets";
import Widgetpage from "../pages/configuration/Widgetpage";

import Reports from "../pages/ReportPage";

import Rentalavailability from "../pages/calendar/Rentalavailability";
import Rentalbookings from "../pages/calendar/Rentalbookings";


import SearchPage from "../pages/customer/SearchPage";
import BookingPage from "../pages/customer/BookingPage";
import Reviewspage from "../pages/marketing/Reviewspage";
import Cartspage from "../pages/marketing/Cartspage";


export const routes = createBrowserRouter([
  {
    path: "/",
    element: <PrivateLayout children={<Navigate to="/login" />} />,
  },

  /* Dashboard route */
  {
    path: "/dashboard",
    element: <PrivateLayout children={<Overview />} />,
  },
  {
    path: "/dashboard/overview",
    element: <PrivateLayout children={<Overview />} />,
  },
  {
    path: "/dashboard/manifest",
    element: <PrivateLayout children={<ManifestPage />} />,
  },
  
  /* Products */
  {
    path: "/product",
    element: <PrivateLayout children={<Rental />} />
  },
  {
    path: "/product/create",
    element: <PrivateLayout children={<Rental />} />
  },
  {
    path: "/product/equipment",
    element: <PrivateLayout children={<Equipment />} />
  },
  {
    path: "/product/season",
    element: <PrivateLayout children={<Seansonpage />} />
  },
  {
    path: "/product/duration",
    element: <PrivateLayout children={<Durationpage />} />
  },
  {
    path: "/product/prices",
    element: <PrivateLayout children={<Prices />} />
  },
  {
    path: "/product/availability",
    element: <PrivateLayout children={<Availability />} />
  },
  {
    path: "/product/questions",
    element: <PrivateLayout children={<Questions />} />
  },
  {
    path: "/product/advanced",
    element: <PrivateLayout children={<Advanced />} />
  },

  /* Configuration */

  {
    path: "/configuration/widget",
    element: <PrivateLayout children={<Widgetpage />} />
  },
  {
    path: "/configuration/email",
    element: <PrivateLayout children={<Emailpage />} />
  },
  {
    path: "/configuration/tickets",
    element: <PrivateLayout children={<Tickets />} />
  },
  {
    path: "/configuration/assets",
    element: <PrivateLayout children={<Assetspage />} />
  },
  {
    path: "/configuration/taxes",
    element: <PrivateLayout children={<Taxes />} />
  },
 

  /* Calendar */
  {
    path: "/calendar",
    element: <PrivateLayout children={<Rentalbookings />} />,
  },
  {
    path: "/calendar/rentalbookings",
    element: <PrivateLayout children={<Rentalbookings />} />,
  },
  {
    path: "/calendar/rentalavailability",
    element: <PrivateLayout children={<Rentalavailability />} />,
  },
  {
    path: "/report",
    element: <PrivateLayout children={<Reports />} />,
  },

  /* Customer */
  {
    path: "/customer",
    element: <PrivateLayout children={<SearchPage />} />,
  },
  {
    path: "/customer/search",
    element: <PrivateLayout children={<SearchPage />} />,
  },
  {
    path: "/customer/booking",
    element: <PrivateLayout children={<BookingPage />} />,
  },

  /* Marketing */
  {
    path: "/marketing",
    element: <PrivateLayout children={<Reviewspage />} />,
  },
  {
    path: "/marketing/reviews",
    element: <PrivateLayout children={<Reviewspage />} />,
  },
  {
    path: "/marketing/carts",
    element: <PrivateLayout children={<Cartspage />} />,
  },

  {
    path: "/login",
    element: <PublicLayout children={<LoginPage />} />,
  },
  {
    path: "/signup",
    element: <PublicLayout children={<SignUpPage />} />,
  },
  {
    path: "*",
    element: <PublicLayout children={<NotFoundPage />} />,
  },
]);
