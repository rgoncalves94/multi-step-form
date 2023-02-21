import { lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { DefaultLayout } from "./components/layouts/DefaultLayout";
import PersonalInfoPage from "./pages/PersonalInfoPage";
const PlanPage = lazy(() => import("./pages/PlanPage"));
const AddonsPage = lazy(() => import("./pages/AddonsPage"));
const SummaryPage = lazy(() => import("./pages/SummaryPage"));

function App() {
  return (
    <RouterProvider
      router={createBrowserRouter([
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
              path: "plan",
              element: <PlanPage />,
            },
            { path: "addons", element: <AddonsPage /> },
            { path: "summary", element: <SummaryPage /> },
          ],
        },
      ])}
      fallbackElement={<div>Failed to render routes</div>}
    />
  );
}

export default App;
