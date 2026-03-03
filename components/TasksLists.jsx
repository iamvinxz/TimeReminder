import React, { useEffect, useState } from "react";

const TasksLists = () => {
  const [tasks, setTasks] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/tasks")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setTasks(data);
      });
  }, []);

  console.log(typeof tasks);

  return (
    <div className="mx-5">
      <h1 className="font-bold text-[20px] relative text-[#303030]">
        Todays Task
      </h1>
      {tasks &&
        tasks.map((task, index) => (
          <div
            className="flex gap-5 py-10  border-gray-300 border-b"
            key={index}
          >
            <input type="checkbox" className="w-4" />
            <div className="space-y-2">
              <h2 className="font-semibold text-lg text-[#303030]">
                {task.title}
              </h2>
              <p className="text-sm text-[#303030]">{task.description}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default TasksLists;
