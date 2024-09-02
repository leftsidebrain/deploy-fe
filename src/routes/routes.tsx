import { RouteObject } from "../../node_modules/react-router-dom/dist/index";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import RootLayout from "../layout/RootLayout";
import AuthLayout from "../layout/AuthLayout";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Forgot from "../pages/Forgot";
import Riset from "../pages/Reset";
import DetailPost from "../pages/DetailPost";
import Users from "../pages/Users/Users";
import Search from "../pages/Search/Search";
import Follow from "../pages/Follow/Follow";
import Followers from "../components/follow/followers";
import Following from "../components/follow/following";
import DetailPostReply from "../pages/DetailPostReply";
import UserPost from "../pages/Users/UserPost";
import UserMedia from "../pages/Users/UserMedia";
const routes: RouteObject[] = [
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "search",
        element: <Search />,
      },
      {
        path: "detail/:id",
        element: <DetailPost />,
      },
      {
        path: "detail/reply/:id",
        element: <DetailPostReply />,
      },
      {
        path: `users/:username`,
        element: <Users />,
        children: [
          {
            path: `posts`,
            element: <UserPost />,
          },
          {
            path: `media`,
            element: <UserMedia />,
          },
        ],
      },
      {
        path: "follow",
        element: <Follow />,
        children: [
          {
            path: "follower",
            element: <Followers />,
          },
          {
            path: "following",
            element: <Following />,
          },
        ],
      },
    ],
  },
  {
    path: "auth",
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <Register />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "forgot",
        element: <Forgot />,
      },
      {
        path: "reset",
        element: <Riset />,
      },
    ],
  },
];

export default routes;
