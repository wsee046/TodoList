import styled from "styled-components";
import { ITask } from "../types/schema";
import { useDispatch } from "react-redux";
import { changeIsComplete, deleteTask } from "../store/store";
import EditingSection from "./EditingSection";
import { useEffect, useState } from "react";

interface TaskCardProps {
  task: ITask;
}

const TaskCardContainer = styled.div`
    display: flex;
    align-items: baseline;
    background-color: dimgrey;
    padding: 2%;
    border: solid 1px black;
    margin: 1% 0;
  `

  const TaskTitle = styled.h1`
    color: orange;
    margin-bottom: 0;
  `

  const TaskDescription = styled.p`
    color: white;
  `

  const TaskInfo = styled.div`
    text-align: left;
    flex: 3;
  `

  const Buttons = styled.div`
    flex: 1;
    display: flex;
    justify-content: space-between;
  `

  const Button = styled.button`
    background-color: white;
    padding: 0.5em 2em;
    border-radius: 1.5em;
    cursor: pointer;
    color: ${props => props.color ? props.color : "white"};
    border: solid 1px ${props => props.color ? props.color : "white"};
  `

function TaskCard(props : TaskCardProps) {

  const task = props.task;
  const dispatch = useDispatch();

  const [isEditing, setIsEditing] = useState(false);

  function onComplete() {
    dispatch(changeIsComplete(task.id));
  }

  function onDelete(){
    dispatch(deleteTask(task.id));
  }

  function onEdit(){
    setIsEditing(!isEditing);
  }

  useEffect(() => {
    document.title = isEditing ? `Editing ${task.name} | To Do List App` : `To Do List App`;
  }, [isEditing]);

  return (
    <>
      <TaskCardContainer>
          <TaskInfo style={{textDecoration: task.isComplete ? 'line-through' : ''}}>
              <TaskTitle>{task.name}</TaskTitle>
              <TaskDescription>{task.description}</TaskDescription>
          </TaskInfo>
          <Buttons>
              <Button color="green" onClick={onComplete}>Complete</Button>
              <Button color="blue" onClick={onEdit}>Edit</Button>
              <Button color="red" onClick={onDelete}>Delete</Button>
          </Buttons>
      </TaskCardContainer>
      {isEditing && <EditingSection task={task}/>}
    </>
  )
}

export default TaskCard