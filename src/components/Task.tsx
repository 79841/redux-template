import type { Task as TTask } from "@/types/Task";

type TaskProps = {
  task: TTask;
};
const Task = ({ task }: TaskProps) => {
  return (
    <li>
      {task.name}
      <ul>
        <li>{task.category}</li>
        <li>{task.date}</li>
        <li>{task.done.toString()}</li>
      </ul>
    </li>
  );
};

export default Task;
