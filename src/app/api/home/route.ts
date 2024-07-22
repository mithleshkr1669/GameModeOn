import { NextRequest, NextResponse } from "next/server"
// import { Form } from "react-hook-form"


export async function POST(req:NextRequest, res:NextResponse):Promise<NextResponse>{
    //Get the Form Data
    const Formdata = await req.formData();
    const email = Formdata.get('email');
    const password = Formdata.get('password');
    console.log("emails :", email ,"password :", password)
    //Response 
    return NextResponse.json({email,password})
}