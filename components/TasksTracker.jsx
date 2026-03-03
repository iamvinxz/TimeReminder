import { BsCloudSunFill } from "react-icons/bs";
const TasksTracker = () => {
  return (
    <div className="z-10">
      <div className="flex flex-col ml-5">
        <div className="flex gap-5 mt-8 pl-5">
          <BsCloudSunFill color="#54378F" size={40} />
          <p className="w-90 text-[#303030]">
            Good morning, Alvin! Rise and shine,ready to tackle the day ahead
            with enthusiasm and positivity?
          </p>
        </div>

        <div className="flex items-center gap-10 my-10">
          <div className="flex text-[5rem]">
            <h1 className="font-bold text-[#54378F] text-8xl pl-8">82</h1>
            <span className="text-[#54378F] text-[2rem] font-bold relative top-5">
              %
            </span>
          </div>

          <div className="bg-white rounded-3xl w-60 px-7 py-5 drop-shadow-md relative left-15">
            <p className="font-semibold text-[#8A8484] text-[14px]">
              TASKS COMPLETED
            </p>
            <h2 className="text-[#221F1F] font-bold text-[40px] my-2">8/10</h2>

            <div className="bg-[#DADADA] w-full h-3 rounded-lg">
              <div className="bg-[#FFBD59] w-3 h-3 rounded-lg"></div>
            </div>
          </div>
        </div>

        <div className="relative top-18">
          <div className="flex gap-4 my-5">
            <div className="bg-[#FF598B] w-50 p-5 rounded-xl">
              <p className="text-[13px] font-semibold text-white">PAST DUES</p>
              <h1 className="text-[48px] font-bold text-white">0</h1>
            </div>
            <div className="bg-[#54378F] w-50 p-5 rounded-xl">
              <p className="text-[13px] font-semibold text-white">TODAY</p>
              <h1 className="text-[48px] font-bold text-white">0</h1>
            </div>
          </div>
          <div className="flex gap-4 my-5">
            <div className="bg-[#FFBD59] w-50 p-5 rounded-xl">
              <p className="text-[13px] font-semibold text-white">INCOMING</p>
              <h1 className="text-[48px] font-bold text-white">0</h1>
            </div>
            <div className="bg-[#EEEEEE] w-50 p-5 rounded-xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TasksTracker;
