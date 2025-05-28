'use client'
import { Roadmap } from "@axonicles/types/index";
import { VscFileSubmodule } from "react-icons/vsc";
import { GiDuration } from "react-icons/gi";
import { CircularProgress } from "@axonicles/ui/CircularProgress"
import { AddTooltip } from "@axonicles/ui/AddTooltip"
import { Button } from "@axonicles/ui/Button";
import { FaAngleRight } from "react-icons/fa6";
import { RiGeminiFill } from "react-icons/ri";
import { useRouter } from "next/navigation";
interface RoadmapCardsInterface {
    roadmap: Roadmap
}

export default function RoadmapCards({ roadmap }: RoadmapCardsInterface) {
    const router = useRouter();
    return (
        <div className="animated-border text-gray-300 my-2 w-[30%]">
            <div className="border w-full bg-secondary  hover:shadow-md py-3  px-5 border-gray-600 flex flex-col gap-2 rounded-sm">
                <div className="flex w-full justify-between">
                    <h3 className="font-semibold text-xl">{roadmap.title}</h3>
                    <div>
                        <AddTooltip content={`${roadmap.progress}% completed`}>
                            <CircularProgress percentage={roadmap.progress} />
                        </AddTooltip>
                    </div>

                </div>
                <div>
                    <p className="text-sm flex items-center gap-2  text-gray-400 hover:text-gray-200"> <span className="text-xl"><VscFileSubmodule /></span> <span>{roadmap.tasks.length} </span>Modules</p>
                </div>
                <div >
                    <p className="text-sm flex items-center gap-2  text-gray-400 hover:text-gray-200"><span className="text-lg"><GiDuration /></span><span>{roadmap.expectedDuration} days</span></p>

                </div>
                <div className="flex justify-between w-full">
                    <p className="text-sm flex items-center gap-2 text-gray-400 hover:text-gray-200"> <span className="text-xl"><RiGeminiFill /></span>by <span>{roadmap.generated_by} </span></p>
                    <Button
                        onClick={() => router.replace(`/roadmap/${roadmap._id}`)}
                        className="group flex items-center gap-1 px-4 transition-all duration-300 ease-in-out"
                        variant="primary"
                    >
                        Continue
                        <span className="transform transition-transform duration-300 ease-in-out group-hover:translate-x-1">
                            <FaAngleRight />
                        </span>
                    </Button>

                </div>
            </div>
        </div>
    );
}

