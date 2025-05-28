'use client'

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { sampleRoadmap } from "@axonicles/lib/sample";

export default function Page() {
  const params = useParams();
  const id = params.id as string;

  return (
    <div>
      
    </div>
  );
}
