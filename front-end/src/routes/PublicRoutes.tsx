import { Route } from "react-router-dom";
import PublicLayout from "../layouts/PublicLayout";
import {Home,Shop,Cart,NotFound} from "../pages/user";

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
