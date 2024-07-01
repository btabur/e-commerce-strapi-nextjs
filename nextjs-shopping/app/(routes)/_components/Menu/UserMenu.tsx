'use client'
import useAuthStore from '@/hooks/useAuth'
import React, { useEffect } from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { User, UserCircleIcon } from 'lucide-react'
import Link from 'next/link'

const UserMenu = () => {
    const {jwt,setJwt}= useAuthStore()

    useEffect(()=> {
        if(typeof window !="undefined"){
            const jwt = localStorage.getItem("jwt")
            const user = localStorage.getItem("user")

            if(jwt && user) {
                const useObj = JSON.parse(user)
                setJwt(jwt)
            }
        }
    },[])
    const onSignout = ()=> {
        if(typeof window !="undefined"){
            localStorage.removeItem("jwt")
            localStorage.removeItem("user")
            setJwt("")

          
        }
    }
  return (
    <div>
          {jwt ? (
       <DropdownMenu>
       <DropdownMenuTrigger>
            <UserCircleIcon className='h-6 w-6'/>
       </DropdownMenuTrigger>
       <DropdownMenuContent>
         <DropdownMenuLabel>My Account</DropdownMenuLabel>
         <DropdownMenuSeparator />
         <DropdownMenuItem>Profile</DropdownMenuItem>
         <DropdownMenuItem onClick={onSignout}>Subscription</DropdownMenuItem>
       </DropdownMenuContent>
     </DropdownMenu>
    ) : (
        <Link href={"/"}>
         <User/>
        </Link>
    )}

    </div>
  
  )
}

export default UserMenu