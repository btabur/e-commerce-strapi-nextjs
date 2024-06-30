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


const formShema =z.object({
  username:z.string().min(2,{
    message:"username must be least 2 characters"
  }),
  email:z.string().min(2,{
    message:"email must be least 2 characters"
  }),
  password:z.string().min(2,{
    message:"password must be least 2 characters"
  })
})

const CreateUserPage = () => {

  const form = useForm<z.infer<typeof formShema>>({
    resolver:zodResolver(formShema),
    defaultValues:{
      username:"",
      email:"",
      password:""
    }
  })

  const onSubmit = ()=> {

  }

  return (
    <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-4/5">
    <FormField
        control={form.control}
        name="username"
        render={({ field }) => (
          <FormItem>
            <FormLabel className='text-one'>username</FormLabel>
            <FormControl>
              <Input placeholder="username" {...field} />
            </FormControl>
           
            <FormMessage  className='validation-login'/>
          </FormItem>
        )}
      />
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
      <Button className='w-full' type="submit">Register</Button>
    </form>
    <div className='mt-8 flex flex-col items-center gap-2'>
      <Label>
         have you an account?
      </Label>
      <Link href="/login" className='text-mycolor3 font-semibold cursor-pointer'>
          login
      </Link>
    </div>
  </Form>
  )
}

export default CreateUserPage