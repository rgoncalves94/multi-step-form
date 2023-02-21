import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import { DefaultLayout } from "../components/layouts/DefaultLayout";
import PersonalInfoPage from "../pages/PersonalInfoPage";
const PlanPage = lazy(() => import("../pages/PlanPage"));
const AddonsPage = lazy(() => import("../pages/AddonsPage"));
const SummaryPage = lazy(() => import("../pages/SummaryPage"));

const Router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        index: true,
        path: "personal-info",
        element: <PersonalInfoPage />,
      },
      {
        path: "plans",
        element: <PlanPage />,
      },
      { path: "addons", element: <AddonsPage /> },
      { path: "summary", element: <SummaryPage /> },
    ],
  },
]);

export { Router };
