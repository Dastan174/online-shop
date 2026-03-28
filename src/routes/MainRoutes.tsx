import { Route, Routes } from "react-router-dom";

import AdminProducts from "../components/pages/adminProducts/AdminProducts";
import AdminEdit from "../components/pages/edit/AdminEdit";

const MainRoutes = () => {
  const routes = [
    { link: "/admin-products", element: <AdminProducts /> },
    { link: "/admin-edit", element: <AdminEdit /> },
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
