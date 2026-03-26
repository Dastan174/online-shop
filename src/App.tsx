import Hero from "./components/widgets/hero/Hero";
import ProductsList from "./components/widgets/productsList/ProductsList";
import MainRoutes from "./routes/MainRoutes";

const App = () => {
  return (
    <>
      <Hero />
      <ProductsList />
      <MainRoutes />
    </>
  );
};

export default App;
