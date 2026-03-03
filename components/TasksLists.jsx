import React, { createContext, useEffect, useState } from "react";
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
import useFetch from "./useFetch";

const TasksLists = () => {
  const { data, isPending } = useFetch("http://localhost:3000/tasks");
  const [localTasks, setLocalTasks] = useState([]);

  useEffect(() => {
    if (data) {
      setLocalTasks(data.map((task) => ({ ...task, isComplete: false })));
    }
  }, [data]);

  console.log(localTasks);

  const handleCheck = (id) => {
    setLocalTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, isComplete: !t.isComplete } : t)),
    );
  };

  return (
    <div>
      <h1 className="font-bold text-[20px] text-[#303030] py-5">Todays Task</h1>
      <div className="mx-5 max-h-178 overflow-auto scrollbar-hide w-150">
        {isPending && <div>Loading...</div>}
        {localTasks.map((task) => (
          <FieldGroup
            className="flex flex-row border-gray-300 border-b py-5"
            key={task.id}
          >
            <Field orientation="horizontal">
              <Checkbox
                className="relative top-1.5 border border-[#8A8484] data-[state=checked]:bg-yellow-500 data-[state=checked]:text-yellow-50"
                checked={task.isComplete}
                id={task.id}
                onCheckedChange={() => handleCheck(task.id)}
              />
              <FieldContent>
                <FieldLabel
                  className={`font-semibold text-lg ${task.isComplete ? "line-through text-yellow-400" : "text-[#303030]"}`}
                >
                  {task.title}
                </FieldLabel>
                <FieldDescription
                  className={`text-sm ${task.isComplete ? "line-through text-yellow-400" : "text-[#303030]"}`}
                >
                  {task.description}
                </FieldDescription>
              </FieldContent>
            </Field>

            <div className="flex items-center gap-3 w-50 relative -top-5">
              <TbCalendarDue
                className={`text-sm ${task.isComplete ? "text-gray-300" : "text-[#8A8484]"}`}
              />
              <span
                className={`text-sm ${task.isComplete ? "text-gray-300" : "text-[#8A8484]"}`}
              >
                {formatDate(task.deadline)}
              </span>
            </div>
          </FieldGroup>
        ))}
      </div>
    </div>
  );
};
export const ArrayTask = createContext(localStorage);
export default TasksLists;
