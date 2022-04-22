import { toggleTask, deleteTask } from './todoSlice'
import { useAppDispatch } from "./hooks";

const TaskItem = (props: any) => {
  console.log(props)
  const { task } = props;
  const dispatch = useAppDispatch();
  console.log(task)

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={task.done}
          onChange={() => dispatch(toggleTask(task.id))}
        />
        {task.text}

        <span
          onClick={() => dispatch(deleteTask(task.id))}
          role="button"
          style={{ padding: "5px", marginLeft: "20px" }}
        >
          X
        </span>
      </label>
    </div>
  );
};

export default TaskItem;
