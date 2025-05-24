import mongoose from "mongoose";

// User interface
export interface User {
    _id?: string; // Unique user ID, created by mongodb defauly
    email: string; // User email, unique + req
    username: string; // Display name, unique, auto generated
    profile_picture: string; // URL of profile picture, default=""
    bio: string; // Short bio or user-provided details, default=""
    portfolio: string; // default=""
    github: string; // default=""
    linkedIn: string; // default=""
    other_links: Array<string>; // default=[]
    interests: Array<string>; // default=[]
    goal: string; // User's primary goal, like become a devops engineer, default=""
    profession: string; // User's current profession (e.g., "Student," "Professional"), default=""
    progress: number; // Progress percentage across all roadmaps, default=0
    roadmaps: Array<string | mongoose.Schema.Types.ObjectId> // ids of roadmaps, default=[]
}