import styled from "styled-components";
import { ITask } from "../types/schema";
import { useDispatch } from "react-redux";
import { changeIsComplete, store } from "../store/store";
interface TaskCardProps {
  task: ITask;
}

function TaskCard(props : TaskCardProps) {

  const task = props.task

  const dispatch = useDispatch();

  const TaskCardContainer = styled.div`
    display: flex;
    align-items: baseline;
    background-color: dimgrey;
    padding: 2%;
    border: solid 1px black;
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
    
    ${task.isComplete && `
      color: dark-brown;
      text-decoration: line-through;
    `}
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

  function onComplete() {
    store.dispatch(changeIsComplete(task.id));
  }

  return (
    <TaskCardContainer>
        <TaskInfo>
            <TaskTitle>{task.name}</TaskTitle>
            <TaskDescription>{task.description}</TaskDescription>
        </TaskInfo>
        <Buttons>
            <Button color="green" onClick={onComplete}>Complete</Button>
            <Button color="blue">Edit</Button>
            <Button color="red">Delete</Button>
        </Buttons>
    </TaskCardContainer>
  )
}

export default TaskCard