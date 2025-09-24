import HomeSlider from "./_components/HomeSlider/HomeSlider";

import CategoriesSlider from "./_components/CategoriesSlider/CategoriesSlider";
import AllProducts from "./_components/AllProducts/AllProducts";
export default function Home() {
  return (
    <div className="container mx-auto  my-8 space-y-4">
      <div>
        <HomeSlider />
      </div>

      <div className="border-y-2  border-accent-foreground/40 py-6">
        <h2 className="text-2xl font-bold mb-4">Browse Popular Categories</h2>
        <CategoriesSlider />
      </div>

      <div>
        <AllProducts/>
      </div>
    </div>
  );
}
