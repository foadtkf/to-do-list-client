import React from "react";

const Task = ({ task }) => {
  return (
    <tr class="hover">
      <th>1</th>
      <td>{task.task}</td>
      <td>{task.starting}</td>
      <td>{task.ending}</td>
      <td>{task.status}</td>
      <td>
        <div class="btn-group">
          <button class="btn btn-active">Completed</button>
          <button class="btn">Update</button>
          <button class="btn">Delete</button>
        </div>
      </td>
    </tr>
  );
};

export default Task;
