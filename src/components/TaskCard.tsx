function TaskCard() {
    const taskName = "Test 1";
    const taskDescription = "Test 2";
    
  return (
    <div>
        <div>
            <h1>{taskName}</h1>
            <p>{taskDescription}</p>
        </div>
        <div>
            <button>Edit</button>
            <button>Complete</button>
            <button>Delete</button>
        </div>
    </div>
  )
}

export default TaskCard