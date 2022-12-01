const AddTask = () => {
    return (
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
    )
}

export default AddTask