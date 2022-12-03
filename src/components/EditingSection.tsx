import styled from 'styled-components';
import { ITask } from '../types/schema';
import { Label } from '../styles/AddTaskStyles';
import { useDispatch } from 'react-redux';
import React from 'react';
import { changeName, changeDescription } from '../store/task';
import { changeIsEditing } from '../store/editing';
import { Button, InputField } from '../styles/TaskCardStyles';

const EditingArea = styled.div`
  background-color: white;
  padding: 5%;
  border: 1px solid black;
  margin-top: -1%;
`

interface EditingProps {
  task: ITask
}

function EditingSection(props : EditingProps) {

  const task = props.task;
  const dispatch = useDispatch();

  function handleNameChange(event : React.ChangeEvent<HTMLInputElement>) {
    dispatch(changeName(task.id, event.target.value));
  }

  function handleDescriptionChange(event : React.ChangeEvent<HTMLInputElement>) {
    dispatch(changeDescription(task.id, event.target.value));   
  }

  function handleSubmit() {
    dispatch(changeIsEditing(false));
  }

  return (
    <EditingArea>
      <h1>Editing "{props.task.name}"</h1>
      <form onSubmit={handleSubmit}>
          <Label htmlFor="taskNameInput">Name:</Label>
          <InputField id="taskNameInput" type="text" value={props.task.name} onChange={handleNameChange}></InputField>

          <Label htmlFor="TaskDescriptionInput">Description:</Label>
          <InputField id="TaskDescriptionInput" type="text" value={props.task.description} onChange={handleDescriptionChange}></InputField>

          <Button color="Blue">Done</Button>
      </form>
    </EditingArea>
  )
}

export default EditingSection