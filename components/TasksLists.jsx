import React, { useEffect, useState } from "react";
import { TbCalendarDue } from "react-icons/tb";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Field,
  FieldContent,
  FieldLabel,
  FieldDescription,
  FieldGroup,
} from "@/components/ui/field";
import { formatDate } from "@/lib/dateFormatter";

const TasksLists = () => {
  const [isFinished, setIsFinished] = useState(false);
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

  return (
    <div>
      <h1 className="font-bold text-[20px] text-[#303030] py-5">Todays Task</h1>
      <div className="mx-5 max-h-178 overflow-auto scrollbar-hide w-150">
        {tasks &&
          tasks.map((task, index) => (
            <FieldGroup
              className="flex flex-row border-gray-300 border-b py-5"
              key={index}
            >
              <Field orientation="horizontal">
                <Checkbox className="relative top-1.5 border border-[#8A8484] accent-[#54378F]" />
                <FieldContent>
                  <FieldLabel className="font-semibold text-lg text-[#303030]">
                    {task.title}
                  </FieldLabel>
                  <FieldDescription>
                    <p className="text-sm text-[#303030]">{task.description}</p>
                  </FieldDescription>
                </FieldContent>
              </Field>

              <div className="flex items-center gap-3 w-50 relative -top-5">
                <TbCalendarDue color="#8A8484" />
                <span className="text-sm text-[#8A8484]">
                  {formatDate(task.deadline)}
                </span>
              </div>
            </FieldGroup>
          ))}
      </div>
    </div>
  );
};

export default TasksLists;
