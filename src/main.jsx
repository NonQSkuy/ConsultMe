import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { NextUIProvider } from "@nextui-org/react";
import Layout from "./layout/layout";
import Home from "./pages/home";
import About from "./pages/about";
import Consult from "./pages/consult";
import PsikologPage from "./pages/psikolog";
import Payment from "./payment";
import PsikologDetail from "./pages/psikolog/detail";
import CalendarScheduler from "./pages/calendar";
import PrepareMeeting from "./pages/room-meet";
import Forum from "./pages/forum";
import ForumDetail from "./pages/forum/forumdetail";
import DetailRoomMeet from "./pages/room-meet/detail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/consult",
        element: <Consult />,
      },
      {
        path: "/psikolog",
        element: <PsikologPage />,
      },
      {
        path: "/payment",
        element: <Payment />,
      },
      {
        path: "/psikologDetail",
        element: <PsikologDetail />,
      },
      {
        path: "calendar",
        element: <CalendarScheduler/>
      },
      {
        path: "/prepare",
        element: <PrepareMeeting />,
      },
      {
        path: "/forum",
        element: <Forum/>
      },
      {
        path: "/forumdetail",
        element: <ForumDetail/>
      },
      {
        path: "/meet",
        element: <DetailRoomMeet />,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NextUIProvider>
      <RouterProvider router={router} />
    </NextUIProvider>
  </React.StrictMode>
);
