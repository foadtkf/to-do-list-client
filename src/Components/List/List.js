import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast, ToastContainer } from "react-toastify";
import auth from "../../firebase.init";
import { useNavigate } from "react-router-dom";

const List = () => {
  const navigate = useNavigate();

  const navigateToUpdate = (id) => {
    navigate(`/update/${id}`);
  };
  const [tasks, setTasks] = useState([]);
  const [user] = useAuthState(auth);
  useEffect(() => {
    fetch("https://herokutodolistdaddy.herokuapp.com/tasks")
      .then((res) => res.json())
      .then((data) => setTasks(data));
  },);
  const handleDelete = (id) => {
    const proceed = window.confirm("R you sure?");
    if (proceed) {
      fetch(`https://herokutodolistdaddy.herokuapp.com/tasks/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const remaining = tasks.filter((task) => task._id !== id);
          setTasks(remaining);
        });
      toast.error("Deleted Successfully!");
    }
  };
  const handleUpdateproduct = (id) => {
    const updateproduct = { status: "completed" };
    fetch(`https://herokutodolistdaddy.herokuapp.com/tasksstat/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateproduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("success", data);
        toast.success("status updated successfully");
      });
  };

  return (
    <div class="overflow-x-auto min-h-screen">
      <table class="table w-full">
        <thead>
          <tr class="hover">
            <th>Sl</th>
            <th>Task</th>
            <th>Starting</th>
            <th>Ending</th>
            <th>Status</th>
            <th>operations</th>
          </tr>
        </thead>
        <tbody>
          {
            tasks.length>0?
(     tasks.map((task, index) => (
            <tr class="hover">
              <th>{index + 1}</th>
              <td>{task.task}</td>
              <td>{task.starting}</td>
              <td>{task.ending}</td>
              <td>{task.status}</td>
              <td>
                <div class="btn-group">
                  {task.status !== "completed" && user && (
                    <button
                      class="btn btn-active"
                      onClick={() => handleUpdateproduct(task._id)}
                    >
                      Completed
                    </button>
                  )}
                  {user && (
                    <>
                      <button
                        class="btn"
                        onClick={() => navigateToUpdate(task._id)}
                      >
                        Update
                      </button>
                      <button
                        class="btn"
                        onClick={() => handleDelete(task._id)}
                      >
                        Delete
                      </button>
                    </>
                  )}
                </div>
              </td>
            </tr>
          ))):(<h1 className="text-2xl font-bold text-center">no task to show</h1>)
          }
        </tbody>
      </table>
      <ToastContainer />
    </div>
  );
};

export default List;
