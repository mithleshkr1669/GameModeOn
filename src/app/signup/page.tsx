"use client"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useRouter } from "next/navigation"


export default function Signup() {
  const router = useRouter();
  function handleClick() {
    router.push("/")
  }

    return (
      <main className="flex min-h-screen flex-col items-center">
         <form action="/home" method="POST" className="m-auto">
                <p onClick={handleClick} className="hover:bg-gradient-to-t from-yellow-500 cursor-pointer hover:scale-105
   rounded to-black text-white mb-7 font-mono text-lg text-center animate-bounce hover:animate-none">Login</p>
      <p className="text-white mb-5 font-mono text-sm text-center">or</p>
      
      <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-xl">Sign Up</CardTitle>
        <CardDescription>
          Enter your information to create an account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="first-name">First name</Label>
              <Input name="first-name" id="first-name" placeholder="Mithlesh" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="last-name">Last name</Label>
              <Input name="last-name" id="last-name" placeholder="Kumar" required />
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
                  <Input
                    name="email"
              id="email"
              type="email"
              placeholder="m@example.com"
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input name="password" id="password" type="password" />
          </div>
          <Button type="submit" className="w-full">
            Create an account
          </Button>
        </div>
      </CardContent>
    </Card>

      </form>
       

      </main>
    
    
    
  )
}

