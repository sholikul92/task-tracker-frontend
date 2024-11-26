import { Header } from "../components/header";
import { BiEdit } from "react-icons/bi";
import { HiOutlineSquare3Stack3D } from "react-icons/hi2";
import { Button } from "../items/Button";

export const AddTask = () => {
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
            <form id='form-add-task' method='POST' className='bg-white w-96 flex flex-col p-8 rounded-2xl gap-2'>
              <label htmlFor='task-name' className='text-xl font-semibold'>
                Task Name
              </label>
              <div className='relative'>
                <BiEdit className='absolute text-2xl top-2 left-2 text-gray-600' />
                <input
                  type='text'
                  name='task-name'
                  id='task-name'
                  placeholder='type task name'
                  className='border p-2 rounded-full focus:outline-blue-500 w-full pl-10'
                />
              </div>
              <label htmlFor='priority-level' className='text-xl font-semibold'>
                Priority Level
              </label>
              <div className='relative'>
                <HiOutlineSquare3Stack3D className='text-2xl absolute top-2 left-2' />
                <select name='priority-level' id='priority-level' className='border p-2 bg-white rounded-full w-full pl-10 focus:outline-blue-500'>
                  <option value='' disabled selected hidden>
                    Select the level of task
                  </option>
                  <option value='low'>Low</option>
                  <option value='medium'>Medium</option>
                  <option value='high'>High</option>
                </select>
              </div>
              <label htmlFor='date-deadline' className='text-xl font-semibold'>
                Deadline
              </label>
              <input
                type='date'
                min='2024-10-17'
                max='2030-12-30'
                name='date-deadline'
                id='date-deadline'
                className='w-full border p-2 rounded-full focus:outline-blue-500 bg-white'
              />

              <Button title='Save New Task' />
            </form>
          </section>
        </section>
      </div>
    </>
  );
};
