import { Header } from "../components/header";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { TaskForm } from "../components/TaskForm";

export const AddTask = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    title: "",
    priority: "",
    deadline: "",
    completed: false,
  });

  const handleInput = (event: React.FormEvent<HTMLInputElement | HTMLSelectElement>) => {
    // eslint-disable-next-line prefer-const
    let { name, value } = event.currentTarget;

    if (name === "deadline") {
      value = `${value}:00+07:00`;
    }

    setData({
      ...data,
      [name]: value,
    });
  };

  const handleForm = async (event: React.FormEvent<HTMLElement>) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/task/add", {
        ...data,
      });

      if (response.status == 201) {
        console.log(data);

        handleNavigate();
      }
    } catch (err) {
      if (err == axios.AxiosError) {
        console.log(err);
      }
    }
  };

  const handleNavigate = () => {
    navigate("/");
  };

  return (
    <>
      <div className='bg-[#E9EDF2] min-h-screen px-56 pt-10'>
        <Header path='/' value='Manage Task' />
        <section className='m-4 md:mx-48'>
          <section className='flex flex-col items-center'>
            <h1 className='text-4xl font-bold'>Add New Task</h1>
            <p className='text-gray-700'>Set goals to develop yourself</p>
          </section>
          <section className='flex justify-center mt-12'>
            <TaskForm task={data} onSubmit={handleForm} onChange={handleInput} />
          </section>
        </section>
      </div>
    </>
  );
};
