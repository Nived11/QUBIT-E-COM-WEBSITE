import { Route } from "react-router-dom";
import PublicLayout from "../layouts/PublicLayout";
import Home from "../pages/user/Home";
import Shop from "../pages/user/Shop";
import Cart from "../pages/user/Cart";
import NotFound from "../pages/user/NotFound";

const PublicRoutes = () => {
  return (
    <Route element={<PublicLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  );
};

export default PublicRoutes;
