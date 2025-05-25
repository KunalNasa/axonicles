'use client'

import { authClient } from "../../lib/auth/auth-client";
import { signup } from "../../helpers/signup";
import { useEffect } from "react";
import { signin } from "../../helpers/signin";

export default function page() {
    const { 
        data: session, 
        isPending, //loading state
        error, //error object
        refetch //refetch the session
    } = authClient.useSession();
    const fetchMe = async () => {
      const data = await fetch("http://localhost:8080/api/me", {
        method: "GET",
        credentials: "include"
      });
      const res = await data.json();
      console.log(res);
    }

    const handleSignin = async() => {
      const email = "notlikethis@gmail.com", password = "K@123456", name = "kunal", image = "12345";
        const {data, error} = await signin(email, password);
        console.log(data);
        alert(data);
        alert(data);
    }

    // const fetchProtected = async () => {
    //   const data = await fetch("http://localhost:8080/protected", {
    //     method: "GET",
    //     credentials: "include"
    //   });
    //   const res = await data.json();
    //   console.log(res);
    // }
    // useEffect(() => {
    //   fetchMe();
    //   fetchProtected();
    // }, [])
    const handleSignup = async () => {
        const email = "notlrerikethis@gmail.com", password = "K@123456", name = "kunal", image = "12345";
        const {data, error} = await signup(email, password, name, image);
        alert(data);
        alert(data);
    }

    const handleLogout = async () => {
      await authClient.signOut();
    }

    const handleGen = async () => {
      const data = await fetch("http://localhost:8080/api/roadmap/generate-roadmap", {
        method: "post",
        credentials: "include"
      });
      const res = await data.json();
      console.log("REsponse is",res);
    }
  return (
    <div>
        <button onClick={handleSignup}>Click me</button>  
        {session ? <p>There is session</p> : <p>No session</p>}
        <button onClick={handleLogout}>Log Out</button>
        <div>

        <button onClick={handleGen}>Generate roadmap</button>
        </div>
        <div>

        <button onClick={handleSignin}>signin</button>
        </div>
    </div>
  );
}