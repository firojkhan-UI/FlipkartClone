import React, { useState } from "react";

const TodoApp = () => {
    const [list, setList] = useState([])
    const [item, setItem] = useState("")

    const handleItem = e => {
        setItem(e.target.value)
    }

    const handleAddItem = () => {
        setList( prev => [...prev, item])
        setItem("")
    }

    const removedItem = (id) => { 
        console.log(id,"HAHAHA::::")
        // setList([...list].filter( (_,ind) => ind !==id))
        // setList((prev) => prev.filter( (_,ind) => ind !== id ))
        const newList = [...list]
        newList.splice(id,1)
        setList(newList)
    } 

    return (<>
    <input onChange={handleItem} value={item}/>
    <button onClick={handleAddItem}>+</button>
    <TodoItems removedItem = {removedItem} list ={list}/>
    </>)
}

export default TodoApp;

const TodoItems = ({list, removedItem}) => {
    return (<>
    {list?.map((item,id) => <li style={{listStyle: 'none'}}>{item} <button  onClick={() => removedItem(id)}>x</button></li>)}
    </>)
}