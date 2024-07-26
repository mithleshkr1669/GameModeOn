import pg from "pg";
import { NextRequest, NextResponse } from "next/server"
import bcrypt from "bcryptjs"
import { redirect } from "next/navigation";
import { cookies } from 'next/headers'
import { Cookie } from "next/font/google";



const db = new pg.Client({
  user:'postgres',
  host:'localhost',
  database:'GameModeOn',
  password:'Sudhirkr$12',
  port:5432
});


db.connect();
async function create() {
  // cookies().set('name', 'lee')
  // // or
  // cookies().set('name', 'lee', { secure: true })
  // // or
  cookies().set({
    name: 'name',
    value: 'lee',
    httpOnly: true,
    path: '/',
  })
}


export async function POST(req: NextRequest, res: NextResponse): Promise<NextResponse>{
  console.log("login route page")
    const formData = await req.formData()
    const email = formData.get('email');
    const password = String(formData.get('password'));

    const userDetail = await db.query("SELECT (password) FROM user_details WHERE email=$1", [email]);
  // console.log("console log user_detail", userDetail.rows[0].email)
  const storedHashedPassword=userDetail.rows[0].password
  const result = await bcrypt.compare(password, storedHashedPassword);
  console.log("console log", result);

  if (result) {
    const cookiesStore = cookies();
    const hasCookies = cookiesStore.has('name');
    console.log("cookies",hasCookies)
    if (!hasCookies) {
      create()
    }
    

  redirect('/home');
  } else {
    alert("password is not correct")
  }
    return NextResponse.json("msg")
}