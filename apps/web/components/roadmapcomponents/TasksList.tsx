'use client'
import { Roadmap } from "@axonicles/types/index";
import { useState } from "react";
import ShowSubtopics from "./ShowSubtopics";
import {Progress} from "@axonicles/ui/Progress"
import { MdChevronRight } from "react-icons/md";
export default function TasksList({data} : {data : Roadmap}) {
  const [open, setOpen] = useState<Record<string, boolean>>({});
  const map: Map<string, number> = new Map();
  data.tasks.forEach((value) => {
    let count = 0;
    value.subtopics.forEach((sub) => {
      if (sub.status === "Done") {
        count++;
      }
    })
    map.set(value.title, count);
  })
  return (
    <div className="">
      {data.tasks.map((item) => (
            <div className="p-7 my-2 flex flex-col bg-secondary rounded-md" onClick={() => setOpen({...open, [item.title]: !open[item.title]})} key={item.title}>
              <div className="w-full flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span><MdChevronRight/></span>
                  <h3>{item.title}</h3>
                </div>
                <div className="w-1/4 flex justify-between items-center gap-5">
                  <Progress value={Number(item.progress)} />
                  <p className="inline-block whitespace-nowrap px-1 text-sm">
                    <span>{map.get(item.title)}</span>
                    <span> / </span>
                    <span>{item.subtopics.length}</span>
                  </p>
                </div>
              </div>
              {open[item.title] && <ShowSubtopics/>}
            </div>
        ))}
    </div>
  );
}