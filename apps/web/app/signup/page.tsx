'use client'

import { authClient } from "../../lib/auth/auth-client";
import { signup } from "../../lib/signup";

export default function page() {
    const { 
        data: session, 
        isPending, //loading state
        error, //error object
        refetch //refetch the session
    } = authClient.useSession();

    const handleSignup = async () => {
        const email = "abcde@gmail.com", password = "K@123456", name = "kunal", image = "12345";
        const {data, error} = await signup(email, password, name, image);
    }
  return (
    <div>
        <button onClick={handleSignup}>Click me</button>  
        {session ? <p>There is session</p> : <p>No session</p>}
    </div>
  );
}