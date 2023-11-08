import { taskListActions } from "@/store";
import type { Task as TTask } from "@/types/Task";
import { useDispatch } from "react-redux";

type TaskProps = {
  task: TTask;
};
const Task = ({ task }: TaskProps) => {
  const dispatch = useDispatch();

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    dispatch(taskListActions.delete(task.name));
  };

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    dispatch(taskListActions.switchState(task.name));
  };

  return (
    <li>
      <div>
        <input type="checkbox" checked={task.done} onChange={handleChange} />
        {task.name}
      </div>
      <ul>
        <li>{task.category}</li>
        <li>{task.date}</li>
        <li>
          <button onClick={handleClick}>Delete</button>
        </li>
      </ul>
    </li>
  );
};

export default Task;
