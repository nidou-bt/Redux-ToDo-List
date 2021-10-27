import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { addTask } from '../JS/actions/task'


function AddTask() {
    const [description, setDescription] = useState("");
    const dispatch = useDispatch();
    const handelAdd=(e)=>{
        e.preventDefault();
        description!==""?dispatch(addTask({id:Math.random(), description, isDone : false})) : alert("Hello World!");
        
        setDescription("");
    };
    return (
        <form style={{textAlign:'center', margin:'20px'}}>
            <input type="text" placeholder="add todo" onChange={(e)=>setDescription(e.target.value)} value={description} />
            <button onClick={handelAdd}>add Task</button>
        </form>
    )
}

export default AddTask
