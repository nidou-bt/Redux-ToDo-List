import React from 'react'
import Task from './Task'
import {useSelector} from "react-redux"
import Filter from './Filter'
import { useState } from "react";

function ListTask() {
    const [f, setF] = useState("All")
    const tasks = useSelector(state => state.taskReducer.tasks)
    return (
        <div>
            <Filter setF={setF}/>
            {f=="All"? tasks.map(el=>(<Task el={el} key={el.id}/>)):
            f=="Done"? tasks.filter(el=>el.isDone==true).map(el=>(<Task el={el} key={el.id}/>)):
            f=="UNDone"? tasks.filter(el=>el.isDone==false).map(el=>(<Task el={el} key={el.id}/>)):null
            }
            
        </div>
    )
}

export default ListTask
