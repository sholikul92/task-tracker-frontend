import { BiEdit } from "react-icons/bi";
import { HiOutlineSquare3Stack3D } from "react-icons/hi2";
import { Button } from "../items/Button";
import { handleInputDate } from "../helper/handleInputDate";
import React from "react";

interface Task {
  title: string;
  priority: string;
  deadline: string;
}

interface Props {
  task: Task;
  valueButton: string;
  onSubmit: (event: React.FormEvent<HTMLElement>) => Promise<void>;
  onChange: (event: React.FormEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

export const TaskForm: React.FC<Props> = ({ task, valueButton, onSubmit, onChange }) => {
  return (
    <form id='form-add-task' method='POST' className='bg-white w-96 flex flex-col p-8 rounded-2xl gap-2' onSubmit={onSubmit}>
      <label htmlFor='title' className='text-xl font-semibold'>
        Task Name
      </label>
      <div className='relative'>
        <BiEdit className='absolute text-2xl top-2 left-2 text-gray-600' />
        <input
          type='text'
          name='title'
          id='title'
          value={task?.title}
          placeholder='type task name'
          className='border p-2 rounded-full focus:outline-blue-500 w-full pl-10'
          onChange={onChange}
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
          value={task?.priority}
          className='border p-2 bg-white rounded-full w-full pl-10 focus:outline-blue-500'
          onChange={onChange}
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
        value={handleInputDate(task?.deadline)}
        className='w-full border p-2 rounded-full focus:outline-blue-500 bg-white'
        onChange={onChange}
        required
      />

      <Button title={valueButton} type='submit' />
    </form>
  );
};
