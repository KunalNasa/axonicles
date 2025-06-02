import { Roadmap } from "@axonicles/types/index";
import { CircularProgress } from "@axonicles/ui/CircularProgress";

type MetricCardProps = {
  title: string;
  value: string | number;
  percentage?: number;
};

function MetricCard({ title, value, percentage }: MetricCardProps) {
  return (
    <div className="flex gap-5 w-1/2 md:w-1/4 border border-gray-700 hover:border-gray-500 p-5 rounded-md justify-between text-gray-200 items-center">
      <div className="flex flex-col justify-between gap-3 items-start">
        <h3 className="text-lg font-semibold text-gray-200">{title}</h3>
        <p>{value}</p>
      </div>
      {percentage !== undefined && <CircularProgress size={50} percentage={percentage} />}
    </div>
  );
}

interface IUserRoadmapHeader {
  data : Roadmap,
  subtopicsCount: number,
  subtopicsProgress: number
}
export default function UserRoadmapHeader({ data, subtopicsCount, subtopicsProgress }: IUserRoadmapHeader) {

  return (
    <div>
      <div className="flex flex-col gap-1 mt-2 mb-5">
        <h1 className="font-semibold text-2xl text-gray-200">{data.title}</h1>
        <p className="text-sm text-gray-300">{data.description}</p>
      </div>
      <div className="bg-secondary my-2 flex items-center justify-between gap-4 p-1 rounded-md w-full">
        <MetricCard percentage={data.progress} title="Overall Progress" value={`${data.progress} % completed`} />
        <MetricCard title="Total Tasks" value={`${data.tasks.length} Tasks`} />
        <MetricCard percentage={subtopicsProgress} title="Total Subtopics"value={`${subtopicsCount} Subtopics`}  />
        <MetricCard title="Expected Duration" value={`${data.duration} Days`} />
      </div>
    </div>
  );
}
