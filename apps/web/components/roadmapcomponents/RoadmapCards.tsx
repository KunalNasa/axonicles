'use client'
import { Roadmap } from "@axonicles/types/index";
import { CgGoogleTasks } from "react-icons/cg";
import { GiDuration } from "react-icons/gi";
import {CircularProgress} from "@axonicles/ui/CircularProgress"
import {AddTooltip} from "@axonicles/ui/AddTooltip"
import { Button } from "@axonicles/ui/Button";
import { FaAngleRight } from "react-icons/fa6";
import { RiGeminiFill } from "react-icons/ri";
import { useRouter } from "next/navigation";
interface RoadmapCardsInterface {
    roadmap : Roadmap
}

export default function RoadmapCards( { roadmap} : RoadmapCardsInterface ) {
    const router = useRouter();
  return (
    <div className="border bg-secondary py-3 my-2 px-5 border-gray-400 flex flex-col gap-2 rounded-sm ">
        <div className="flex w-full justify-between">
            <h3 className="font-semibold">{roadmap.title}</h3>
            <div>
                <AddTooltip content={`${roadmap.progress}% completed` }>
                    <CircularProgress percentage={roadmap.progress} />
                </AddTooltip>
            </div>

        </div>
        <div>
            <p className="text-sm flex items-center gap-2 text-purple-400"> <span className="text-xl"><CgGoogleTasks/></span> <span>{roadmap.tasks.length} </span>Modules</p>
        </div>
        <div >
            <p className="text-sm flex items-center gap-2 text-yellow-400"><span className="text-lg"><GiDuration/></span><span>{roadmap.expectedDuration} days</span></p>
           
        </div>
        <div className="flex justify-between w-full">
            <p className="text-sm flex items-center gap-2 text-pink-400"> <span className="text-xl"><RiGeminiFill/></span>by <span>{roadmap.generated_by} </span></p>
            <Button onClick={() => {router.replace(`/roadmap/${roadmap._id}`)}} className="flex items-center gap-1" variant='primary'>Continue Learning<span className="flex hover:hidden"><FaAngleRight/></span> </Button>
        </div>


    </div>
  );
}

