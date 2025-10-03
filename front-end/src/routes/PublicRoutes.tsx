import { Route } from "react-router-dom";
import PublicLayout from "../layouts/PublicLayout";
import ProfileLayout from "../layouts/ProfileLayout";
import { Home, ProductDetails, NotFound, Cart , ProfileInfo} from "../pages/user";

const PublicRoutes = () => {
  return (
    <Route element={<PublicLayout />}>
      <Route path="*" element={<NotFound />} />
      <Route path="/" element={<Home />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/cart" element={<Cart />} />

      {/* Profile Section */}
      <Route path="/profile" element={<ProfileLayout />}>
        <Route index element={<ProfileInfo />} /> 
      </Route>
    </Route>
  );
};

export default PublicRoutes;
