import { ITask } from "../types/schema";
import { useDispatch, useSelector } from "react-redux";
import { changeIsComplete, deleteTask } from "../store/task";
import EditingSection from "./EditingSection";
import { changeCurrentTask, changeIsEditing, getCurrentTask, getIsEditing } from "../store/editing";
import { useDocumentTitle } from "../customHooks/useDocumentTitle";
import { TaskCardContainer, TaskInfo, TaskTitle, TaskDescription, Buttons, Button } from "../styles/TaskCardStyles";

interface TaskCardProps {
  task: ITask;
}

function TaskCard(props : TaskCardProps) {

  const task = props.task;
  const dispatch = useDispatch();

  const isEditing = useSelector(getIsEditing);
  const currentEditingTask = useSelector(getCurrentTask);

  function onComplete() {
    dispatch(changeIsComplete(task.id));
  }

  function onDelete(){
    dispatch(deleteTask(task.id));
  }

  function onEdit(){
    if (isEditing && currentEditingTask.id !== task.id) {
      alert("Please close other editing tabs.");
    } else if (isEditing) {
      dispatch(changeIsEditing(false));
      dispatch(changeCurrentTask(null));
    } else {
      dispatch(changeIsEditing(true));
      dispatch(changeCurrentTask(task));
    }
  }

  // hook for updating the document title
  useDocumentTitle();

  return (
    <>
      <TaskCardContainer>
          <TaskInfo isComplete={task.isComplete}>
              <TaskTitle>{task.name}</TaskTitle>
              <TaskDescription>{task.description}</TaskDescription>
          </TaskInfo>
          <Buttons>
              <Button color="green" onClick={onComplete}>Complete</Button>
              <Button color="blue" onClick={onEdit}>Edit</Button>
              <Button color="red" onClick={onDelete}>Delete</Button>
          </Buttons>
      </TaskCardContainer>
      {(isEditing && currentEditingTask.id === task.id) && <EditingSection task={task}/>}
    </>
  )
}

export default TaskCard