import FormComponent from "./FormComponent";
import TasksLists from "./TasksLists";
import TasksTracker from "./TasksTracker";

const Content = () => {
  return (
    <section className="grid grid-cols-3 justify-items-stretch w-full px-10 mt-8">
      <img
        src="colorful-bg.png"
        className="absolute -top-15 -left-90 w-220 h-130 rounded-br-4xl opacity-13 "
      />
      <div className="justify-self-start">
        <TasksTracker />
      </div>
      <div className="justify-self-center">
        <TasksLists />
      </div>
      <div className="justify-self-end">
        <FormComponent />
      </div>
    </section>
  );
};

export default Content;
