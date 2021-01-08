import {v4 as uuidv4} from 'uuid' 
export  const addAccount=({userName,location}={})=>({ type: "ADD",account:{id:uuidv4(),userName:userName,location:location}})

export  const removeAccount=({id}={})=>({type:"REMOVE",id})

