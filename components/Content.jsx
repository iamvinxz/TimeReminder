import FormComponent from "./FormComponent";
import TasksLists from "./TasksLists";
import TasksTracker from "./TasksTracker";

const Content = () => {
  return (
    <section className="grid grid-cols-3 justify-between mt-8 px-11">
      <img
        src="colorful-bg.png"
        className="absolute -top-15 -left-90 w-220 h-130 rounded-br-4xl opacity-13 "
      />
      <TasksTracker />
      <TasksLists />
      <FormComponent />
    </section>
  );
};

export default Content;
