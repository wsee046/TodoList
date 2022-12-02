import { FormEvent } from "react"
import styled, {css} from "styled-components"
import { useDispatch, useSelector } from 'react-redux'
import { getName, getNextId } from "../store/store"
import { store } from '.././store/store'

const AddTask = () => {

    const Form = styled.form`
        background: #404040;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 4%;
        gap: 10%;
    `

    const Field = styled.div`
        display: flex;
        flex-direction: column;
        width: 80%;
        height: 100%;
        gap: 5px;
    `

    const SubmitButton = styled.button`
        padding: 1.5% 3% 1.5% 3%;
        border-radius: 30px;
        background: orange;
        color: white;
        cursor: pointer;
        width: 30%;
    `

    const TextEntry = styled.input`
        border-radius: 10px;
        height: 1.6em;
        padding-left: 5%;
        width: 90%;
    `

    const Label = styled.label`
        text-align: left;
        padding-left: 5%;
    `

    const dispatch = useDispatch();

    function handleAddTask(event : any){
        event.preventDefault();
        const nextId = getNextId()
        dispatch({
            type: "addTask",
            payload: {
                id: nextId,
                task: {
                    id: nextId,
                    name: event.target.elements.nameInput.value,
                    description: event.target.elements.descriptionInput.value,
                    isComplete: false,
                    }
            }
        })
        console.log(store.getState());
    }

    return (
        <Form onSubmit={handleAddTask}>
            <Field>
                <Label htmlFor="nameInput">Name</Label>
                <TextEntry id="nameInput" type='text'/>
            </Field>
            <Field>
                <Label htmlFor="descriptionInput">Description</Label>
                <TextEntry id="descriptionInput" type='text'/>
            </Field>
            <SubmitButton type='submit'>Add Todo</SubmitButton>
        </Form>
    )
}

export default AddTask