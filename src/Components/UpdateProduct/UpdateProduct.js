import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

const UpdateProduct = () => {
    const {id} =useParams();
    const [task ,setTask]=useState({})
    console.log(task)
    const [name,setName] =useState(0)
    useEffect(()=>{
fetch(`https://herokutodolistdaddy.herokuapp.com/tasks/${id}`)
.then(res=>res.json())
.then(data=>{setTask(data)
            setName(data.quantity)})
    },[name])

    const handleUpdateproduct=event =>{
        event.preventDefault()
        const taskName=event.target.quantity.value
        const updateproduct={task: taskName}
        fetch(`https://herokutodolistdaddy.herokuapp.com/tasks/${id}`,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(updateproduct)
        })
        .then(res=>res.json())
        .then(data=>{console.log('success',data)
        setName(taskName)
        toast.success('task updated successfully')})
        event.target.quantity.value=''
    }
    return (
        <div  style={{minHeight:'100vh'}}>
        <p className='text-2xl'><strong>Task Name: {name}</strong></p>
                <br/>
        <form onSubmit={handleUpdateproduct} style={{display:'flex',flexDirection:'row',justifyContent:'center'}}> 

                <input type="text" min={1} name='quantity' placeholder='enter new name' required />
                <br/>
                <Button className='rounded pt-1 w-100' size="lg" style={{marginLeft:'1%'}} type="submit">Update task</Button>
            </form>
       <ToastContainer></ToastContainer>
        </div>
    );
};

export default UpdateProduct;