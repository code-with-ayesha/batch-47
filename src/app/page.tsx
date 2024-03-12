import Image from "next/image";
import Hero from "@/views/Hero";
import ProductList from "@/views/ProductList";
import Jewellery from "@/views/jewellery";
import Newsletter from "@/views/Newsletter";
import ProductTypes from "@/views/ProductTypes";




export default function Home() {
  return (
  <div>
<Hero/>
{/* Products */}
<ProductTypes />
<ProductList />
<Jewellery/>
<Newsletter />


  </div>
  );
}
