"use client"
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import axios from "axios";

export function LoginForm() {
  const router = useRouter();

  function handleClick() {
    router.push("/signup");
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(e.target)
    const formData = new FormData(e.currentTarget);
    console.log(formData)

    try {
      const response = await axios.post("/api/home", formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log("response", response.data);  // Access the data property from the response
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="m-auto">
      <p
        onClick={handleClick}
        className="hover:bg-gradient-to-t from-yellow-500 cursor-pointer hover:scale-105 rounded to-black text-white mb-7 font-mono text-lg text-center animate-bounce hover:animate-none"
      >
        Sign Up
      </p>
      <p className="text-white mb-5 font-mono text-sm text-center">or</p>

      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Enter your email below to login to your account.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input name="email" id="email" type="email" placeholder="m@example.com" required />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input name="password" id="password" type="password" required />
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" className="w-full">Sign in</Button>
        </CardFooter>
      </Card>
    </form>
  );
}
