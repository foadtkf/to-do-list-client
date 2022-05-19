import React, { useEffect, useState } from 'react';
import Task from './Task';

const List = () => {
  const [tasks,setTasks] = useState([])
  useEffect( ()=>{
    fetch('task.json')
    .then(res => res.json())
    .then(data => setTasks(data));
}, [])
    return (
        <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr class="hover">
              <th></th>
              <th>Task</th>
              <th>Starting</th>
              <th>Ending</th>
              <th>Status</th>
              <th>operations</th>
            </tr>
          </thead>
          <tbody>
            {
              tasks.map(task=><Task key={task._id} task={task}></Task>)
            }
            
          </tbody>
        </table>
      </div>
    );
};

export default List;