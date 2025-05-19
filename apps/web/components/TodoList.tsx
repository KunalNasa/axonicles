"use client"

import { trpc } from "../app/_trpc/client"

export default function TodoList() {
    const todos = trpc.getTodos.useQuery(undefined, {
        refetchOnMount: false,
        refetchOnReconnect: false
    });

    return (
        <div>
            {JSON.stringify(todos.data)}; 
        </div>
    )
}