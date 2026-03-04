import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import {
  NativeSelect,
  NativeSelectOption,
} from "@/components/ui/native-select";
import { Button } from "@/components/ui/button";

const FormComponent = () => {
  const now = new Date().toISOString().slice(0, 16);
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const submitForm = async (data) => {
    try {
      await fetch("http://localhost:3000/tasks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <section className="w-120 mt-4">
      <form
        onSubmit={handleSubmit(submitForm)}
        className="space-y-5 bg-white p-6 rounded-xl w-full shadow-xl"
      >
        <div className="space-y-3">
          <Label className="text-[#8A8484]">Deadline</Label>
          <Input
            min={now}
            type="datetime-local"
            {...register("deadline", { required: true })}
            className="text-[#8A8484]"
          />
        </div>

        <div className="space-y-3">
          <Label className="text-[#8A8484]">Title</Label>
          <Input
            type="text"
            {...register("title", { required: true })}
            className="text-[#8A8484]"
          />
        </div>

        <div className="space-y-3">
          <Label className="text-[#8A8484]">Description</Label>
          <Textarea
            className="resize-none text-[#8A8484]"
            {...register("description", { required: true })}
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
          <div className="flex gap-2 p-2 overflow-x-scroll scrollbar-hide">
            {days.map((day, index) => (
              <div
                className="flex gap-2 border border-[#EEEEEE] p-2"
                key={index}
              >
                <input type="checkbox" className="accent-[#54378F]" />
                <Label>{day}</Label>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <Label className="text-[#8A8484]">Until</Label>
          <Input
            type="date"
            {...register("until", { required: true })}
            className="text-[#8A8484]"
          />
        </div>
        <Button
          disabled={isSubmitting}
          type="submit"
          className="w-full text-md py-6 cursor-pointer bg-[#54378F] shadow-md hover:bg-[#815fc5]"
        >
          {isSubmitting ? "Creating Task" : "Create Task"}
        </Button>
      </form>
    </section>
  );
};

export default FormComponent;
