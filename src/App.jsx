import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Content from "../components/Content";
import { ArrayTasksContext } from "./lib/useContext.js";
import useFetch from "../components/useFetch.jsx";

const App = () => {
  const { data, isPending } = useFetch("http://localhost:3000/tasks");
  const [localTasks, setLocalTasks] = useState([]);
  const [pastDue, setPastDue] = useState(["1", "2"]);

  useEffect(() => {
    if (data) {
      setLocalTasks(data.map((task) => ({ ...task, isComplete: false })));
    }
  }, [data]);

  return (
    <div className="bg-[#F8F8F8] h-screen">
      <ArrayTasksContext.Provider
        value={{
          task: [localTasks, setLocalTasks],
          due: [pastDue, setPastDue],
        }}
      >
        <NavBar />
        <Content />
      </ArrayTasksContext.Provider>
    </div>
  );
};

export default App;
