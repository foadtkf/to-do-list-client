import React from 'react';

const List = () => {
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
            <tr class="hover">
              <th>1</th>
              <td>Study</td>
              <td>18th May,2022</td>
              <td>20th May,2022</td>
              <td>pending</td>
              <td>
              <div class="btn-group">
  <button class="btn btn-active">Completed</button>
  <button class="btn">Update</button>
  <button class="btn">Delete</button>
</div>
              </td>
            </tr>
            
          </tbody>
        </table>
      </div>
    );
};

export default List;