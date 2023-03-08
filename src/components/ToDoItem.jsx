
import { useState } from "react";


function ToDoItem({toDoContent, deleteToDoItem}) {

    const [isChecked, setIsChecked] = useState(false);

    function checkToDoItem() {
        setIsChecked(!isChecked);
    }

    function handleDelete() {
        deleteToDoItem()
    }

    return(
        <div className="bordered" onClick={checkToDoItem}>
            <h2 style={isChecked ? {textDecoration: 'line-through'}:{}}>{toDoContent}</h2>
            <button onClick={handleDelete}>Delete</button>
        </div>
    )
}

export default ToDoItem;