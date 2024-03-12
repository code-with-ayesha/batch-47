import React from 'react';
import P1 from "/public/p1.webp";
import Image, { StaticImageData } from 'next/image';
import ProductCard from '@/component/ProductCard';
import { Products } from '@/components/ui/utils/mock';

function ProductList() {
  const productChecks = Products.slice(0,3);
 
  return (
    <div className='flex flex-col md:flex-row mx-auto justify-evenly mt-16 py-10'>
{
 productChecks.map((product)=>(
  <ProductCard
   key={product.id}
    title={product.name} 
    price={product.price} 
    img={product.image as StaticImageData}
    category={product.category}
    id={product.id}
    />
 ))
}






     {/* <ProductCard title='abc' price={100}/>
     <ProductCard title='xyz' price={100}/>
     <ProductCard title='nbfd' price={100}/> */}
    </div>
  )
}

export default ProductList

