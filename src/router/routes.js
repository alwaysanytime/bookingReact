import { Navigate, createBrowserRouter } from "react-router-dom";
import PrivateLayout from "../layout/PrivateLayout";
import DashBoardPage from "../pages/DashboardPage";
// import Reports from "../pages/Reports";
import ExpensePage from "../pages/ExpensePage";
import ReportPage from "../pages/ReportPage";
import ShareThingsPage from "../pages/ShareThingsPage";
import PlanPage from "../pages/PlanPage";
import SkillUpPageEnglishPage from "../pages/SkillUpPageEnglishPage";
import SkillUpCodePage from "../pages/SkillUpCodePage";
import PublicLayout from "../layout/PublicLayout";
import SignUpPage from "../pages/SignUpPage";
import LoginPage from "../pages/LoginPage";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <PrivateLayout children={<Navigate to="/login" />} />,
  },
  {
    path: "/dashboard",
    element: <PrivateLayout children={<DashBoardPage />} />,
  },
  // {
  //   path: "/income",
  //   element: <PrivateLayout children={<Reports />} />,
  // },
  {
    path: "/expense",
    element: <PrivateLayout children={<ExpensePage />} />,
  },
  {
    path: "/skill-up",
    element: <PrivateLayout children={<SkillUpCodePage />} />,
  },
  {
    path: "/skill-up/code",
    element: <PrivateLayout children={<SkillUpCodePage />} />,
  },
  {
    path: "/skill-up/english",
    element: <PrivateLayout children={<SkillUpPageEnglishPage />} />,
  },
  {
    path: "/report",
    element: <PrivateLayout children={<ReportPage />} />,
  },
  {
    path: "/share-things",
    element: <PrivateLayout children={<ShareThingsPage />} />,
  },
  {
    path: "/plan",
    element: <PrivateLayout children={<PlanPage />} />,
  },
  {
    path: "/login",
    element: <PublicLayout children={<LoginPage />} />,
  },
  {
    path: "/signup",
    element: <PublicLayout children={<SignUpPage />} />,
  },
]);
