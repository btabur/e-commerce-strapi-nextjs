'use client'
import { ModeToggle } from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import Image from "next/image";

export default function Home() {
  const {toast} = useToast()
  return (
   <main>
    <button> deneme</button>
    <Button onClick={()=> {
      toast({
        variant:"destructive",
        title:"deneme",
        description:"açıklama"
      })
    }}> btn</Button>

    <ModeToggle/>
    
   </main>
  );
}
