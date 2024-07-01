"use client"
import React from 'react'
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from '@/components/ui/button'
import { Label } from '@radix-ui/react-label'
import Link from 'next/link'
import useAuthStore from '@/hooks/useAuth'
import { useToast } from '@/components/ui/use-toast'
import { useRouter } from 'next/navigation'
import { Loader2Icon } from 'lucide-react'
import loginUser from '@/actions/login'
import { startSession } from '@/lib/session'


const formShema =z.object({
  email:z.string().min(2,{
    message:"email must be least 2 characters"
  }),
  password:z.string().min(2,{
    message:"password must be least 2 characters"
  })
})

const LoginPage = () => {
  const {loader,setLoader}= useAuthStore();
  const {toast}= useToast();
  const router = useRouter()

  const form = useForm<z.infer<typeof formShema>>({
    resolver:zodResolver(formShema),
    defaultValues:{
      email:"",
      password:""
    }
  })

  const onSubmit = (data:z.infer<typeof formShema>)=> {
    setLoader(true)

    loginUser(data.email, data.password).then(
      (resp)=> {
        startSession(resp.user,resp.jwt)
        toast({
          variant:"success",
          title:"hesap başarı ile oluşturuldu"
        }),
        setLoader(false),
        router.push("/")
      },
      (error)=> {
        setLoader(false),
        toast({
          title:"Birşeyler yanlış gitti",
          variant:"destructive"
        })
        
      }
    ).finally(()=> {
      setLoader(false)
    })

  }

  return (
    <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-4/5">
      <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormLabel className='text-one'>email</FormLabel>
            <FormControl>
              <Input placeholder="email" {...field} />
            </FormControl>
           
            <FormMessage  className='validation-login'/>
          </FormItem>
        )}
      />
       <FormField
        control={form.control}
        name="password"
        render={({ field }) => (
          <FormItem>
            <FormLabel className='text-one'>password</FormLabel>
            <FormControl>
              <Input placeholder="password" type="password" {...field} />
            </FormControl>
           
            <FormMessage  className='validation-login'/>
          </FormItem>
        )}
      />
      <Button className='w-full' type="submit">
        {loader ? <Loader2Icon className='animate-spin'/> : "Giriş Yap"}
      </Button>
    </form>
    <div className='mt-8 flex flex-col items-center gap-2'>
      <Label>
        Dont have an account
      </Label>
      <Link href="/create-user" className='text-mycolor3 font-semibold cursor-pointer'>
      Register
      </Link>
    </div>
  </Form>
  )
}

export default LoginPage