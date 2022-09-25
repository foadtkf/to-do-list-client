import React from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { format, formatDistance, subDays } from "date-fns";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const AddService = () => {
  console.log(format(new Date(), "'Today is' eeee"));
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";
  const onSubmit = (data) => {
    console.log(data);
    const url = `https://to-do-server.onrender.com//tasks`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        toast.success("task added successfully", {
          position: toast.POSITION.TOP_RIGHT,
        });
      });

    navigate(from, { replace: true });
  };
  const [user] = useAuthState(auth);
  console.log(user.email);
  return (
    <div
      className="w-50 mx-auto my-5 border rounded shadow-lg p-5"
      style={{ minHeight: "100vh" }}
    >
      <h2 className="text-4xl">Add a new task: </h2>
      <br />
      <form
        className="d-flex flex-column rounded"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          className="input input-bordered"
          {...register("task")}
          placeholder="Name"
          required
        />
        <br />
        <input
          className="input input-bordered"
          {...register("status")}
          placeholder="status"
          required
        />
        <br />
        <input
          className="input input-bordered"
          {...register("starting")}
          placeholder="starting"
          required
        />
        <br />
        <input
          className="input input-bordered"
          {...register("ending")}
          placeholder="ending"
          required
        />
        <br />
        <input
          className="input input-bordered"
          {...register("email")}
          value={user.email}
          required
        />
        <br />
        <input type="submit" value="Submit" class="btn" />
      </form>
      <ToastContainer />
    </div>
  );
};

export default AddService;
