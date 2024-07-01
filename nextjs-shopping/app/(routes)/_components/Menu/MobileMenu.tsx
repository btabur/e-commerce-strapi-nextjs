import { Category } from '@/constans/type'
import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { MenuIcon } from 'lucide-react'
import Link from 'next/link'

interface MobileMenuProbs {
    categories:Category[]
}
const MobileMenu = ({categories}:MobileMenuProbs) => {
  return (
    <Sheet>
    <SheetTrigger>
        <MenuIcon/>
    </SheetTrigger>
    <SheetContent className="bg-one flex flex-col gap-10 mt-20 items-center">
            {
                 categories.map((category)=> (
                    <Link href={`/category/ ${category.attributes.slug}`} key={category.id}>
                      {category.attributes.name}
                    </Link>
                  ))
            }
    </SheetContent>
  </Sheet>
  )
}

export default MobileMenu