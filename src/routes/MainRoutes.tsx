import { Route, Routes } from "react-router-dom";
import Admin from "../components/pages/admin/Admin";
import Detail from "../components/pages/detail/Detail";
import Home from "../components/pages/Home";

const MainRoutes = () => {
  const routes = [
    { link: "/", element: <Home/> },
    { link: "/admin", element: <Admin/> },
    { link: "/detail", element: <Detail/> },
  ];
  return (
    <Routes>
      {routes.map((item, idx) => (
        <Route path={item.link} element={item.element} key={idx} />
      ))}
    </Routes>
  );
};

export default MainRoutes;
