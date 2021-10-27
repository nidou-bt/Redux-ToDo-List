import { ADD_TASK, DELETE_TASK, DONE_TASK, EDIT_TASK } from "../constants/task";

//initiale state
const initialeState={
    tasks:[
    {id:Math.random(), description:"first Task", isDone:false},
    {id:Math.random(), description:"second Task", isDone:false},
    {id:Math.random(), description:"third Task", isDone:false},
    {id:Math.random(), description:"fourth Task", isDone:false},
]
}

//pure function
const taskReducer=(state=initialeState,action)=>{
    switch (action.type) {
        case ADD_TASK:
          return{...state,tasks:[...state.tasks, action.payload]};
        case DELETE_TASK:
          return{...state,tasks:state.tasks.filter((el)=>el.id!=action.payload)};
        case EDIT_TASK:
          return{...state,tasks:state.tasks.map(el=>
             el.id==action.payload.id?{...el,description:action.payload.newTitle}:el)};
        case DONE_TASK:
          return{...state,tasks:state.tasks.map(el=> 
            el.id==action.payload?{...el,isDone:!el.isDone}:el)};
    
        default:
            return state;
    }
}

//export
export default taskReducer;