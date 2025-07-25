import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import App from "./App";
import LayoutShell from "@/layout/LayoutShell";
import DashboardPage from "@/pages/DashboardPage";
import CalendarPage from "@/pages/CalendarPage";
import BookingForm from "@/pages/BookingForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <App>
        <LayoutShell />
      </App>
    ),
    children: [
      { index: true, element: <DashboardPage /> },
      { path: "calendar", element: <CalendarPage /> },
      { path: "book", element: <BookingForm /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
