import React,{useState} from 'react'
import './Style.css'
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import AddIcon from '@mui/icons-material/Add';
import List from './List';
const Todo = () => {
    const[data,setData]=useState("");
    const[add,setAdd]=useState([]);
    const[validation,setValidation]=useState("")
console.log(data)
   const handleChange=(e)=>{
    setData(e.target.value)
   }
   const additems = ()=>{
    if(data == ""){
        setValidation("Enter Your Todo")
    }else{
        setAdd(()=> {
            return [...add,data];
        });
        setData("");
        setValidation("");
    }
    
}
const dltitems=(id)=>{
    const dltuser =add.filter((el,ind)=>{
        return ind !== id
    })
    setAdd(dltuser)
}
      return (
    <>
    <div className='main-container'>
<div className='todo-box'>
<img src='homeimg.jpg' alt='todoimg' className='todoimg'/>
<h2 className='heading'>Write Your Todo List Here</h2>
<h3 className='validation'>{validation}</h3>
<div className='input-container'>
    <input type="text" placeholder='Enter Your Task' onChange={handleChange}/>
    <Tooltip title="Add">
      <Button className='addbtn' onClick={additems}>
        <AddIcon/>
      </Button>
    </Tooltip>
</div>
<div className='store-container'>
<ul>
    {
       add.map((ele,index)=>{
        return(
            <List id={index} text={ele} dltitems={dltitems} />
        )
       })
    }

</ul>
</div>
</div>
    </div>
    </>
  )
}

export default Todo