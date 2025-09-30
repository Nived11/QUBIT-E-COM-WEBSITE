import {Categories,Banners ,ProductList} from "../../features/users/Home"

export default function Home() {
  return (
    <div className="w-full px-4 py-4">
      
      <Categories />
      <Banners />
      <ProductList />
      
    </div>
  );
}
