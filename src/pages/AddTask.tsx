import { Header } from "../components/header";
import { BiEdit } from "react-icons/bi";
import { HiOutlineSquare3Stack3D } from "react-icons/hi2";
import { Button } from "../items/Button";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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
      value = `${value}:00Z`;
    }

    setData({
      ...data,
      [name]: value,
    });
  };

  const handleForm = async (event: React.FormEvent<HTMLElement>) => {
    event.preventDefault();
    try {
      await axios.post("http://localhost:8080/task/add", {
        ...data,
      });
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
        <Header />
        <section className='m-4 md:mx-48'>
          <section className='flex flex-col items-center'>
            <h1 className='text-4xl font-bold'>Add New Task</h1>
            <p className='text-gray-700'>Set goals to develop yourself</p>
          </section>
          <section className='flex justify-center mt-12'>
            <form id='form-add-task' method='POST' className='bg-white w-96 flex flex-col p-8 rounded-2xl gap-2' onSubmit={handleForm}>
              <label htmlFor='title' className='text-xl font-semibold'>
                Task Name
              </label>
              <div className='relative'>
                <BiEdit className='absolute text-2xl top-2 left-2 text-gray-600' />
                <input
                  type='text'
                  name='title'
                  id='title'
                  placeholder='type task name'
                  className='border p-2 rounded-full focus:outline-blue-500 w-full pl-10'
                  onChange={handleInput}
                  required
                />
              </div>
              <label htmlFor='priority' className='text-xl font-semibold'>
                Priority Level
              </label>
              <div className='relative'>
                <HiOutlineSquare3Stack3D className='text-2xl absolute top-2 left-2' />
                <select
                  name='priority'
                  id='priority'
                  className='border p-2 bg-white rounded-full w-full pl-10 focus:outline-blue-500'
                  onChange={handleInput}
                  required
                >
                  <option value='' hidden>
                    Select the level of task
                  </option>
                  <option value='Low'>Low</option>
                  <option value='Medium'>Medium</option>
                  <option value='High'>High</option>
                </select>
              </div>
              <label htmlFor='deadline' className='text-xl font-semibold'>
                Deadline
              </label>
              <input
                type='datetime-local'
                name='deadline'
                id='deadline'
                className='w-full border p-2 rounded-full focus:outline-blue-500 bg-white'
                onChange={handleInput}
                required
              />

              <Button title='Save New Task' type='submit' handleClick={handleNavigate} />
            </form>
          </section>
        </section>
      </div>
    </>
  );
};
