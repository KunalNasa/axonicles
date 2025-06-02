import assert from "assert";
import Axios from "axios"

// Note: The assert function acts as a safety net. It prevents the app from being built if the NEXT_PUBLIC_API_BASE_URL env variable is missing. So we immediately know that something is wrong before the code is deployed.

assert(
    process.env.NEXT_PUBLIC_API_BASE_URL,
    "env variable not set: NEXT_PUBLIC_API_BASE_URL"
);  

export const axios = Axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
    withCredentials: true, 
});