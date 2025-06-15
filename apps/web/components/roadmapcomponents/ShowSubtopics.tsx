'use client'
import { Subtopic } from "@axonicles/types/index";
import { Button } from "@axonicles/ui/Button";
import { useState } from "react";
import { FaInfoCircle, FaBookOpen } from "react-icons/fa"; // Example icons
import { IoIosClose } from "react-icons/io";
function DisplaySubtasks({ sub, isLast }: { sub: Subtopic, isLast: boolean }) {
  const [showDescription, setShowDescription] = useState<boolean> (false);

  return (
    <tr className={`${!isLast && "border-b"} border-gray-400`}>
      <td className="w-[20%] py-3 px-2">{sub.title}</td>
      <td className="w-[20%] py-3 px-2 text-center">{sub.duration}</td>
      <td className="w-[20%] py-3 px-2">{sub.status}</td>

      <td className="w-[20%] py-3 px-2">
        <Button variant="tertiary" onClick={() => setShowDescription(true)} className="flex h-full my-auto items-center gap-2"><span><FaInfoCircle/></span>Description</Button>
      </td>

      <td className="w-[20%] py-3 px-2">
        <p className="flex items-center gap-2"><span><FaBookOpen/></span>Prerequisites</p>
      </td>
      <td>
      <DisplayDescription show={showDescription} sub={sub} setShowDescription={setShowDescription}/>
      </td>
    </tr>
  );
}

function DisplayDescription({
  sub,
  show,
  setShowDescription,
}: {
  sub: Subtopic;
  show: boolean;
  setShowDescription: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div
      className={`fixed top-0 right-0 h-screen w-[600px] z-50 p-4 bg-tertiary bg-gray flex flex-col gap-3 transform transition-all duration-300 ease-in-out ${
        show ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 pointer-events-none'
      }`}
    >
      <Button onClick={() => setShowDescription(false)} variant="tertiary">
        <span className="text-xl">
          <IoIosClose />
        </span>
      </Button>
      <div>
        <p className="p-2">{sub.description}</p>
      </div>
    </div>
  );
}


export default function ShowSubtopics({ data }: { data: Array<Subtopic> }) {
  return (
    <div className="bg-tertiary hover:cursor-default text-sm my-5 rounded-md overflow-x-auto w-full">
      <table className="w-full text-left">
        <thead>
          <tr className="bg-tertiary-local rounded-t-md">
            <th className="w-[20%] py-3 px-2">Titles</th>
            <th className="w-[20%] py-3 px-2 text-center">Duration</th>
            <th className="w-[20%] py-3 px-2">Status</th>
            <th className="w-[20%] py-3 px-2">Description</th>
            <th className="w-[20%] py-3 px-2">Prerequisites</th>
          </tr>
        </thead>
        <tbody>
          {data.map((sub, idx) => (
            <DisplaySubtasks isLast={idx === data.length - 1} key={sub.title} sub={sub} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
