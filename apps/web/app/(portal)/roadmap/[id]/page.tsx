'use client'
import { useParams } from "next/navigation";

export default function page() {
  const params = useParams();
  const id = params.id;
  return (
    <div>
    </div>
  );
}