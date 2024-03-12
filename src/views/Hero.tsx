import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Button } from '@/components/ui/button';
import heroImage from "/public/hero-img.webp";
import Image from 'next/image';

function Hero() {
  return (
   <section className='flex flex-col lg:flex-row gap-y-10 py-6'>
    {/* Left Div */}
    <div className='flex-1'>
    <Badge className='py-3 px-6 rounded-lg bg-blue-200 text-blue-700'>Sale 70%</Badge>
    <h1 className=" scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mt-12">
    An Industrial Take on Streetwear
    </h1>
    <p className="leading-7 [&:not(:first-child)]:mt-12">
      The king, seeing how much happier his subjects were, realized the error of
      his ways and repealed the joke tax.
    </p>
   
   <Button className='bg-black h-12 px-8 mt-12'>Start Shopping</Button>
   <div className='py-12'>
   <div className='flex gap-4'>
   <Image width={90} height={90} src={"https://full-stack-ecommerce-clothing-web.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FFeatured1.66abddd4.png&w=128&q=75"} alt="bazaar"/>
   <Image width={90} height={90} src={"https://full-stack-ecommerce-clothing-web.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FFeatured2.247cd605.png&w=128&q=75"} alt="baztel"/>
   <Image width={90} height={90} src={"https://full-stack-ecommerce-clothing-web.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FFeatured3.6076521d.png&w=128&q=75"} alt="versace"/>
   <Image width={90} height={90} src={"https://full-stack-ecommerce-clothing-web.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FFeatured4.0489f1fc.png&w=128&q=75"} alt="instyle"/>
    </div>
    </div>
    </div> 
   
    {/* Right Div */}
    <div className=' bg-primarywhite rounded-full'>
<Image src={heroImage} alt="hero"/>
    </div>
   </section>
  )
}

export default Hero


