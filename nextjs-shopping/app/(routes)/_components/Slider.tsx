import { getSliders } from "@/actions/getSliders";
import { Sliders } from "@/constans/type";
import React, { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import NavSkeleton from "./Skeleton/NavSkeleton";
import Link from "next/link";
import Image from "next/image";
import SliderSkeleton from "./Skeleton/SliderSkeleton";



const Slider = () => {
  const [sliders, setSliders] = useState<Sliders[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSliders = async () => {
      try {
        const sliders = await getSliders();
        setSliders(sliders);
      } catch (error) {
        console.error("Failed to fetch categories", error);
      } finally {
        setLoading(false);
      }
    };
    fetchSliders();
  
  }, []);
  console.log(sliders);
  return (
    <section>
        {loading ? (
               <SliderSkeleton/>
        ) : (
            
            <Carousel opts={{
                align:"start",
                loop:true
            }}
          
            >
            <CarouselContent>
                {sliders.map((slider)=> (
                    <CarouselItem>
                        <Link href={slider.attributes.url} key={slider.id}>
                            <Image  alt="slider"
                            unoptimized={true}
                            src={process.env.NEXT_PUBLIC_BACKEND_URL +
                                slider?.attributes?.media?.data?.attributes?.url
                            }
                            width={500}
                            height={300}
                            className="w-full h-200 md:h-[450px] object-cover"
                            />
                        </Link>
                    </CarouselItem>
                ))}
           
        
            </CarouselContent>
            <CarouselPrevious className="left-0"/>
            <CarouselNext className="right-0"/>
          </Carousel>
        )}
     
    </section>
  );
};

export default Slider;
