import React from "react";

function TaskList(props){
     return (
          <>
          <li className="item">
          {props.item}
<span className="icon"><i className="fa-solid fa-trash icon-delete" onClick={e=>{
     
props.deleteItem(props.number)}}></i></span>
          </li>
          </>
     )
}


export default TaskList;