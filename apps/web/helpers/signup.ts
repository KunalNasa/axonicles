import { authClient } from "../lib/auth/auth-client";
 
export async function signup(email: string, password: string, name: string, image: string) {
    
    const { data, error } = await authClient.signUp.email({
        email, // user email address
        password, // user password -> min 8 characters by default
        name, // user display name
        image, // User image URL (optional)
        callbackURL: "/dashboard" // A URL to redirect to after the user verifies their email (optional)
    }, {
        onRequest: (ctx : any) => {
            //show loading
        },
        onSuccess: (ctx: any) => {
            //redirect to the dashboard or sign in page
        },
        onError: (ctx: any) => {
            // display the error message
            alert(ctx.error.message);
        },
    });

    return {data, error};
}