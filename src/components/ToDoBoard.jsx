import { useState, useRef } from "react";
import ToDoItem from "./ToDoItem";
//Aim for functionality of rendering
// a series of user-defined child components with
// To do items that will cross themselves off when clicked

function ToDoBoard() {

    const [toDoItems, setToDoItems] = useState([])
    const inputRef = useRef();


    function handleAddToDo() {
        let currentText = inputRef.current.value;

        let key = (new Date()).getTime()


        setToDoItems((currentToDoItems) => {
            return [...currentToDoItems, 
            {
                key: key,
                text: currentText
            }]
        })

        inputRef.current.value = "";
    }

    function handleDelete(key) {
        setToDoItems(() => {
            return toDoItems.filter((item) => item.key !== key)
        })
    }


    return (
        <>
            <h1>To Do:</h1>

            {/* Put To Do Items below here */}

            {
                toDoItems.map((toDoItem) => {
                    
                    return (
                        <ToDoItem
                            key={toDoItem.key}
                            toDoContent = {toDoItem.text}
                            deleteToDoItem = {() => handleDelete(toDoItem.key)}
                        />
                    )
                })
            }
            {/* Put To Do Items above here */}

            <input ref={inputRef} placeholder="Type To Do item here"/>
            <button onClick={handleAddToDo}>Create To Do Item</button>
        </>
    )
}

export default ToDoBoard;