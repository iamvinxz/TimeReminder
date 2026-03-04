import { BsCloudSunFill } from "react-icons/bs";
import { useContext } from "react";
import { ArrayTasksContext } from "@/lib/useContext";
const TasksTracker = () => {
  const now = new Date();
  const todayStart = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
  ).getTime();
  const todayEnd = todayStart + 24 * 60 * 60 * 1000;

  const { task } = useContext(ArrayTasksContext);
  const [statelocalTasks, setStateLocalTasks] = task;

  //filters the tasks that has a property of isComplete = true
  const finishedTasks = statelocalTasks.filter(
    (finished) => finished.isComplete == true,
  );

  //calculates the percentage of the taskslist
  const percentage =
    statelocalTasks.length > 0
      ? (finishedTasks.length / statelocalTasks.length) * 100
      : 0;

  //filter the past deadlines tasks
  const pastDue = statelocalTasks.filter((task) => {
    const deadline = new Date(task.deadline).getTime();
    return deadline < now && !task.isComplete;
  });

  const incoming = statelocalTasks.filter((task) => {
    const deadline = new Date(task.deadline).getTime();
    return deadline >= Date.now() && !task.isComplete;
  });

  const today = statelocalTasks.filter((task) => {
    const deadline = new Date(task.deadline).getTime();
    return (
      deadline >= now.getTime() && deadline <= todayEnd && !task.isComplete
    );
  });

  console.log(today);

  return (
    <div className="z-10">
      <div className="flex flex-col items-center ml-5">
        <div className="flex gap-5 mt-8 pl-5">
          <BsCloudSunFill color="#54378F" size={40} />
          <p className="w-90 text-[#303030]">
            Good morning, Alvin! Rise and shine,ready to tackle the day ahead
            with enthusiasm and positivity?
          </p>
        </div>

        <div className="flex items-center gap-10 my-10">
          <div className="flex text-[5rem] w-50 relative left-15">
            <h1 className="font-bold text-[#54378F] text-8xl transition duration-700 ease-in">
              {Math.round(percentage)}
            </h1>
            <span className="text-[#54378F] text-[2rem] font-bold relative top-5">
              %
            </span>
          </div>

          <div className="bg-white rounded-3xl w-60 px-7 py-5 drop-shadow-md relative left-15">
            <p className="font-semibold text-[#8A8484] text-[14px]">
              TASKS COMPLETED
            </p>
            <h2 className="text-[#221F1F] font-bold text-[40px] my-2">{`${finishedTasks.length}/${statelocalTasks.length}`}</h2>

            <div className="bg-[#DADADA] h-3 rounded-lg w-full">
              <div
                style={{ width: `${percentage}%` }}
                className="bg-[#FFBD59] h-3 rounded-lg transition-all duration-700 ease-linear"
              ></div>
            </div>
          </div>
        </div>

        <div className="relative top-18">
          <div className="flex gap-4 my-5">
            <div className="bg-[#FF598B] w-55 p-5 rounded-xl">
              <p className="text-[13px] font-semibold text-white">PAST DUES</p>
              <h1 className="text-[48px] font-bold text-white">
                {pastDue.length}
              </h1>
            </div>
            <div className="bg-[#54378F] w-55 p-5 rounded-xl">
              <p className="text-[13px] font-semibold text-white">TODAY</p>
              <h1 className="text-[48px] font-bold text-white">
                {today.length}
              </h1>
            </div>
          </div>
          <div className="flex gap-4 my-5">
            <div className="bg-[#FFBD59] w-55 p-5 rounded-xl">
              <p className="text-[13px] font-semibold text-white">INCOMING</p>
              <h1 className="text-[48px] font-bold text-white">
                {incoming.length}
              </h1>
            </div>
            <div className="bg-[#EEEEEE] w-55 p-5 rounded-xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TasksTracker;
