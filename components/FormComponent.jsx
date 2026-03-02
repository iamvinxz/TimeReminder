import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import {
  NativeSelect,
  NativeSelectOption,
} from "@/components/ui/native-select";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const FormComponent = () => {
  const { register, handleSubmit } = useForm();

  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const [taskList, setTaskList] = useState([]);
  const [isFinished, setIsFinished] = useState(false);

  const submitForm = (data) => {
    const newTask = {
      title: data.title,
      description: data.description,
      deadline: data.deadline,
      type: data.type,
      habit: data.habit,
      until: data.until,
    };

    fetch("http:localhost:3000/0", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newTask),
    });

    setTaskList((prev) => [...prev, newTask]);
  };

  return (
    <section className="w-120 ml-25">
      <form
        onSubmit={handleSubmit(submitForm)}
        className="space-y-5 bg-white p-6 rounded-xl w-full shadow-xl"
      >
        <div className="space-y-3">
          <Label className="text-[#8A8484]">Deadline</Label>
          <Input
            type="datetime-local"
            {...register("deadline")}
            className="text-[#8A8484]"
          />
        </div>

        <div className="space-y-3">
          <Label className="text-[#8A8484]">Title</Label>
          <Input
            type="text"
            {...register("title")}
            className="text-[#8A8484]"
          />
        </div>

        <div className="space-y-3">
          <Label className="text-[#8A8484]">Description</Label>
          <Textarea
            className="resize-none text-[#8A8484]"
            {...register("description")}
          />
        </div>

        <div className="space-y-3 w-full">
          <Label className="text-[#8A8484]">Type</Label>
          <NativeSelect
            {...register("type")}
            className="text-[#8A8484] flex w-full"
          >
            <NativeSelectOption value="">Select Type</NativeSelectOption>
            <NativeSelectOption value="Assignment">
              Assignment
            </NativeSelectOption>
            <NativeSelectOption value="Hobby">Hobby</NativeSelectOption>
            <NativeSelectOption value="Urgent">Urgent</NativeSelectOption>
          </NativeSelect>
        </div>

        <div className="space-y-3">
          <Label className="text-[#8A8484]">Link a Habit</Label>
          <Input
            type="text"
            className="w-full text-[#8A8484]"
            {...register("habit")}
          />
        </div>

        <div className="space-y-3">
          <Label className="text-[#8A8484]">Repeat Every</Label>
          <div className="flex gap-2 p-2 overflow-x-scroll">
            {days.map((day, index) => (
              <div
                className="flex gap-2 border border-[#EEEEEE] p-2"
                key={index}
              >
                <input
                  type="checkbox"
                  class="accent-[#54378F]"
                  {...register("repeat")}
                />
                <Label>{day}</Label>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <Label className="text-[#8A8484]">Until</Label>
          <Input
            type="date"
            {...register("until")}
            className="text-[#8A8484]"
          />
        </div>
        <Button
          type="submit"
          className="w-full text-md py-6 cursor-pointer bg-[#54378F] shadow-md hover:bg-[#815fc5]"
        >
          Create Task
        </Button>
      </form>
    </section>
  );
};

export default FormComponent;
