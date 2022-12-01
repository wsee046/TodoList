import styled, {css} from "styled-components"

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

    const SubmitButton = styled.input`
        padding: 1.5% 3% 1.5% 3%;
        border-radius: 15px;
        background: orange;
        color: white;    
    `

    const TextEntry = styled.input`
        border-radius: 10px;
        height: 1.6em;
        padding-left: 5%;
        width: 100%;
    `

    const Label = styled.label`
        text-align: left;
        padding-left: 5%;
    `

    return (
        <Form>
            <Field>
                <Label htmlFor="name">Name</Label>
                <TextEntry id="name" type='text'/>
            </Field>
            <Field>
                <Label htmlFor="description">Description</Label>
                <TextEntry id="description" type='text'/>
            </Field>
            <SubmitButton type='submit' value='Add Todo'/>
        </Form>
    )
}

export default AddTask