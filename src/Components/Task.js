import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask, doneTask} from "../JS/actions/task";
import Edit from "./Edit"
import '../App.css';
function Task({el}) {
const dispatch=useDispatch()

    return (
        <div style={{margin:'5px',display:'flex'}}>
            <p style={{width:'500px',border:'solid', padding:'5px'}} className={el.isDone?"blue1":"red1"} >{el.description}</p>
            <Edit el={el}/>
            <button onClick={()=>dispatch(deleteTask(el.id))} style={{margin:'5px'}}>Delete</button>
            <button style={{margin:'5px'}} onClick={()=>dispatch(doneTask(el.id))} className={el.isDone?"blue1":"red1"} >{el.isDone?"DONE":"UNDONE"}</button>
        

        </div>
    )
}

export default Task
