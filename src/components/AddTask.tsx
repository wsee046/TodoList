import styled, {css} from "styled-components"

const AddTask = () => {
    const AddTaskCard = styled.div`
    background: #383636;
    color: white;
    `
    return (
        <AddTaskCard>
        <form>
            <div>
                <label>Name</label>
                <input type='text'/>
            </div>
            <div>
                <label>Description</label>
                <input type='text'/>
            </div>
            <input type='submit' value='Add Task'/>
        </form>
        </AddTaskCard>
    )
}

export default AddTask