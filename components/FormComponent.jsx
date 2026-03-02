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
  const { register, handleSubmit } = useForm();

  return (
    <section className="w-120 ml-25">
      <form
        onSubmit={handleSubmit}
        className="space-y-5 bg-white p-6 rounded-xl w-full"
      >
        <div className="space-y-3">
          <Label>Deadline</Label>
          <Input type="datetime-local" />
        </div>

        <div className="space-y-3">
          <Label>Title</Label>
          <Input type="text" />
        </div>

        <div className="space-y-3">
          <Label>Description</Label>
          <Textarea className="resize-none" />
        </div>

        <div className="space-y-3">
          <Label>Type</Label>
          <NativeSelect>
            <NativeSelectOption value="">Select Type</NativeSelectOption>
            <NativeSelectOption value="apple">Habit</NativeSelectOption>
            <NativeSelectOption value="banana">Habit</NativeSelectOption>
            <NativeSelectOption value="blueberry">Habit</NativeSelectOption>
            <NativeSelectOption value="pineapple">Habit</NativeSelectOption>
          </NativeSelect>
        </div>

        <div className="space-y-3">
          <Label>Link a Habit</Label>
          <Input type="text" className="w-full" />
        </div>

        <div className="space-y-3">
          <Label>Repeat Every</Label>
          <div className="flex gap-2 p-2 overflow-x-scroll">
            <div className="flex gap-2 border border-[#EEEEEE] p-2">
              <input type="checkbox" />
              <Label>Sun</Label>
            </div>
            <div className="flex gap-2 border border-[#EEEEEE] p-2">
              <input type="checkbox" />
              <Label>Mon</Label>
            </div>
            <div className="flex gap-2 border border-[#EEEEEE] p-2">
              <input type="checkbox" />
              <Label>Tue</Label>
            </div>
            <div className="flex gap-2 border border-[#EEEEEE] p-2">
              <input type="checkbox" />
              <Label>Wed</Label>
            </div>
            <div className="flex gap-2 border border-[#EEEEEE] p-2">
              <input type="checkbox" />
              <Label>Thu</Label>
            </div>
            <div className="flex gap-2 border border-[#EEEEEE] p-2">
              <input type="checkbox" />
              <Label>Fri</Label>
            </div>
            <div className="flex gap-2 border border-[#EEEEEE] p-2">
              <input type="checkbox" />
              <Label>Sat</Label>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <Label>Until</Label>
          <Input type="date" />
        </div>
        <Button
          type="submit"
          className="w-full cursor-pointer bg-[#54378F] hover:bg-[#815fc5]"
        >
          Create Task
        </Button>
      </form>
    </section>
  );
};

export default FormComponent;
