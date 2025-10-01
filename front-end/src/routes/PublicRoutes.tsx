import { Route } from "react-router-dom";
import PublicLayout from "../layouts/PublicLayout";
import {Home,ProductDetails,NotFound ,Cart} from "../pages/user";

const PublicRoutes = () => {
  return (
    <Route element={<PublicLayout />}>
      <Route path="*" element={<NotFound />} />
      <Route path="/" element={<Home />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/cart" element={<Cart />} />
    </Route>
  );
};

export default PublicRoutes;
