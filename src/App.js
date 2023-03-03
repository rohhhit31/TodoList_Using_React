import React, { useState } from "react";
import "./App.css";
import Task from "./components/Task";
import TaskList from "./components/TaskList";
import Footer from "./components/Footer";

function App() {
  const [task,setTask]=useState([
    "Type task in the bar above",
    "Hit enter or click + to add new tasks",
    "Click delete when task completed -->"
  ]);
  let add= (input)=>{
    setTask([...task,input]);
  }
  const deleteItem=(key)=>{
    let newList=[...task];
    newList.splice(key,1);
    setTask([...newList]);
  }
  return (
    <>
      <div className="title">
      <div className="content">
      <Task add={add}/>
      {task.map((item,i)=>{
        return (
          <TaskList key={i} number={i } item={item} deleteItem={deleteItem}/>
        )
      })}
      <Footer />
      </div>
      </div>
     
    </>
  );
}

export default App;
