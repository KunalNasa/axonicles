import { authClient } from "./auth/auth-client";


export async function signin(email:string, password:string) {
    
    const { data, error } = await authClient.signIn.email({
        /**
         * The user email
        */
       email,
       /**
        * The user password
       */
      password,
      /**
       * A URL to redirect to after the user verifies their email (optional)
      */
     callbackURL: "/dashboard",
     /**
      * remember the user session after the browser is closed. 
      * @default true
     */
    rememberMe: false
}, {
    //callbacks
})

return {data, error};
}