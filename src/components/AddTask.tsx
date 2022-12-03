import { useDispatch } from 'react-redux'
import { getNextId, addTask } from "../store/store"
import { Form, Field, SubmitButton, Label, TextEntry } from '../styles/AddTaskStyles';

const AddTask = () => {

    const dispatch = useDispatch();

    function handleAddTask(event : any){
        event.preventDefault();

        // check if either field is empty
        const name = event.target.elements.nameInput.value;
        const description = event.target.elements.descriptionInput.value;
        if (!name || !description){
            alert('You have not entered a name and/or a description')
            return;
        }

        dispatch(addTask({
            id: getNextId(),
            name: name,
            description: description,
            isComplete: false,
        }))

        // clear input fields
        event.target.elements.nameInput.value = ''
        event.target.elements.descriptionInput.value = ''
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