import React from "react";

const TasksLists = () => {
  return (
    <div className="mx-5">
      <h1 className="font-bold text-[20px] relative text-[#303030]">
        Todays Task
      </h1>

      <div className="flex gap-5 py-10  border-gray-300 border-b">
        <input type="checkbox" className="w-4" />
        <div className="space-y-2">
          <h2 className="font-semibold text-lg text-[#303030]">Title</h2>
          <p className="text-sm text-[#303030]">
            Start your day with a few minutes of mindfulness or meditation to
            center yourself
          </p>
        </div>
      </div>

      <div className="flex gap-5 py-10  border-gray-300 border-b">
        <input type="checkbox" className="w-4" />
        <div className="space-y-2">
          <h2 className="font-semibold text-lg text-[#303030]">Title</h2>
          <p className="text-sm text-[#303030]">
            Start your day with a few minutes of mindfulness or meditation to
            center yourself asdawdasd ad asd wasd w
          </p>
        </div>
      </div>

      <div className="flex gap-5 py-10  border-gray-300 border-b">
        <input type="checkbox" className="w-4" />
        <div className="space-y-2">
          <h2 className="font-semibold text-lg text-[#303030]">Title</h2>
          <p className="text-sm text-[#303030]">
            Start your day with a few minutes of mindfulness or meditation to
            center yourself
          </p>
        </div>
      </div>
    </div>
  );
};

export default TasksLists;
