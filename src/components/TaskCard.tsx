import styled from "styled-components";

function TaskCard() {
  // constants for testing
    const taskName = "Test 1";
    const taskDescription = "Test 2";
    const taskStatus = false; // true is complete

    const TaskCardContainer = styled.div`
      display: flex;
      align-items: baseline;
      background-color: dimgrey;
      padding: 2%;
      border: solid 1px black;

      ${taskStatus && `
        color: dark-brown;
        text-decoration: line-through;
      `}

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
      text-decoration: none !important; 
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

  return (
    <TaskCardContainer>
        <TaskInfo>
            <TaskTitle>{taskName}</TaskTitle>
            <TaskDescription>{taskDescription}</TaskDescription>
        </TaskInfo>
        <Buttons>
            <Button color="green">Complete</Button>
            <Button color="blue">Edit</Button>
            <Button color="red">Delete</Button>
        </Buttons>
    </TaskCardContainer>
  )
}

export default TaskCard