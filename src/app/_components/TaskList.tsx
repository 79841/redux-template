"use client";
import type { Task as TTask } from "@/types/Task";
import Task from "@/components/Task";
import { selectCategoryList, selectTaskList, taskListActions } from "@/store";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

const TaskList = () => {
  const dispatch = useDispatch();
  const taskList = useSelector(selectTaskList);
  const categoryList = useSelector(selectCategoryList);

  const [newTask, setNewTask] = useState<Omit<TTask, "date">>({
    name: "",
    category: "",
    done: false,
  });
  const handleChange: React.ChangeEventHandler<
    HTMLInputElement | HTMLSelectElement
  > = (e) => {
    setNewTask((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    dispatch(
      taskListActions.add({ ...newTask, date: new Date().toDateString() })
    );
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" onChange={handleChange} />
        <select name="category" onChange={handleChange}>
          <option value="">Choose Category</option>
          {categoryList.map((category) => (
            <option key={category.name} value={category.name}>
              {category.name}
            </option>
          ))}
        </select>
        <button type="submit">add</button>
      </form>
      <ul>
        {taskList.map((task) => (
          <Task key={task.name} task={task} />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
