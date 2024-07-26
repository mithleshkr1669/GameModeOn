// require('dotenv').config();
import { NextRequest, NextResponse } from "next/server"
// import { Form } from "react-hook-form"
import bcrypt from "bcryptjs";
import pg from "pg"

const db = new pg.Client({
    user:'postgres',
    host:'localhost',
    database:'GameModeOn',
    password:'Sudhirkr$12',
    port:5432
});


db.connect();

const saltRounds = 10


// const password=process.env.PASSWORD?.trim()===''


export async function POST(req:NextRequest, res:NextResponse):Promise<NextResponse>{
    //Get the Form Data
    console.log("sign up route page")
    const Formdata = await req.formData();
    const first_name = Formdata.get('first-name');
    const last_name = Formdata.get('last-name');
    const email = Formdata.get('email');
    const password = String(Formdata.get('password'));
    // const stringPassword=password.toString();
    const hashedPassword=await bcrypt.hash(password, saltRounds)
    console.log("password is hashed successfully",hashedPassword)
    console.log("first_name:", first_name,"last_name :", last_name, "emails :", email, "password :", password)
     db.query("INSERT INTO user_details (first_name,last_name,email,password) VALUES ($1,$2,$3,$4)", [first_name, last_name, email, hashedPassword], (error, res) => {
        if (error) {
            console.log("data did not inserted",error)
        } else {
            console.log("print response :", res)
        }
     })
    // db.end();
    //Response 
    return NextResponse.json({email,password})
}