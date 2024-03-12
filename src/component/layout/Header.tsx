import logo from "/public/logo.webp";
import Image from "next/image";
import Link from "next/link";
import {ShoppingCart} from "lucide-react";
import {Input} from "@/components/ui/input"

function Header() {
  return (
    <div className="flex justify-between zoom-in-100 items-center py-8 px-12">
      <Link href={"/"}>
   <Image src={logo}alt="logo" className="w-40"/>
   </Link>
   <ul className="flex gap-10 items-center">
    <li className="text-lg">
     <Link href={"/category/female"}>
      Female
     </Link> 
      </li>
    <li className="text-lg"> 
    <Link href={"/category/male"}>
      Male
     </Link></li>
    <li className="text-lg"> 
    <Link href={"/category/kids"}>
      Kids
     </Link></li>
    { <li className="text-lg">
      <Link href={"/products"}>
        All Products
     </Link></li> }
     <div><Input placeholder="Search Products" className="h-7" /></div>
    
    </ul>
   <div className="h-10 w-10 rounded-full bg-gray-200 flex justify-center items-center relative">
  <div className="w-4 h-4 rounded-full flex justify-center items-center bg-red-500 absolute right-2 top-0">
    <p className="text-white text-xs">0</p>
    </div>
  <ShoppingCart className="h-6 w-6"/>

   </div>

    </div>
  )
}

export default Header

