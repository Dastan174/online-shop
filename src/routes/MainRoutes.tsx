import { Route, Routes } from "react-router-dom";

const MainRoutes = () => {
  const routes = [
    { link: "/", element: "" },
    { link: "/", element: "" },
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
