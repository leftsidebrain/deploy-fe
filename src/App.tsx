import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./routes/routes";
import useStore from "./store/hooks";
import { useEffect } from "react";
import { api, setAuthToken } from "./hooks/api";

function App() {
  const store = useStore();
  async function chechAuth() {
    const token = localStorage.getItem("token");

    if (!token) {
      return;
    }

    try {
      const response = await api.get("/auth/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      store.setUser({
        username: response.data.data.username,
        email: response.data.data.email,
        fullname: response.data.data.fullname,
        profile: {
          profile_pic: response.data.data.profile_pic,
          banner: response.data.banner,
          bio: response.data.bio,
        },
        id: response.data.data.id,
      });

      localStorage.setItem("token", token);
      setAuthToken(token);
    } catch (error) {
      console.log(error);
      localStorage.removeItem("token");
    }
  }

  useEffect(() => {
    chechAuth();
  }, []);
  return <RouterProvider router={createBrowserRouter(routes)} />;
}

export default App;
