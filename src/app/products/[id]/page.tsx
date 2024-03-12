import { Products } from "@/components/ui/utils/mock"
import  Image  from "next/image"; 
import { StaticImageData } from "next/image";
import Quantity
 from "@/component/Quantity";

const getProductsDetail=(id:number | string) => {
   
    return Products.filter((product) => product.id == id );
};
const sizes = ["xs","sm","md","lg","xl"]
export default function Page({ params }: { params: { id: string } }) {

  const result =getProductsDetail(params.id);
return ( <div className='flex justify-evenly mt-16 py-10 flex-wrap'>

    {  
       
            result.map((product)=>(
            <div key={product.id} className="flex justify-between gap-6">
                {/* Left Image */}
                <div>
                    <Image src={product.image} alt={product.name}/>
                </div>
                {/* Right Contant */}
                <div>
                <div>
                    <h1 className="text-2xl">{product.name}</h1>
                    <h2 className="text-base text-gray-400 font-semibold">
                        {product.tagline}
                        </h2>
               
                </div>
               <div>
                <h3 className="text-xs mt-6 font-semibold">SELECT SIZE</h3>
                {/* Sizes */}
                <div className="flex gap-x-2">
                {
    sizes.map((item) => {
        return  (
             <div key={item} className="center w-6 h-6 mt-2 duration-300 border rounded-full
        hover:shadow-xl ">
         <span className="text-[10px] font-semibold text-center
          text-gray-600"> {item}
          </span> 
       </div> 
        )
    })
}
   
                </div>
                {/* Quantity */}
                <div className="flex gap-x-3 mt-6 items-center">
                    <h3 className="text-[10px] font-semibold">Quantity:</h3>
                    <Quantity/>
                </div>
                </div>
            </div>
            </div>
            ))};
            </div>
)};

      
    








     

   