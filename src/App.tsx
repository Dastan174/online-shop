import { Route, Routes } from "react-router-dom";

import Hero from "./components/widgets/hero/Hero";
import ProductsList from "./components/widgets/productsList/ProductsList";
import AdminProducts from "./components/pages/adminProducts/AdminProducts";
import AdminEdit from "./components/pages/edit/AdminEdit";

const MainRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Hero />
            <ProductsList />
          </>
        }
      />

      <Route path="/admin-products" element={<AdminProducts />} />
      <Route path="/admin-edit" element={<AdminEdit />} />
    </Routes>
  );
};

export default MainRoutes;
