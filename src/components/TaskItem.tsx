import React from "react";
import { IoMdTime, IoMdDoneAll } from "react-icons/io";
import { RiHourglass2Fill } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { PiCellSignalLowFill, PiCellSignalMediumFill, PiCellSignalFullFill } from "react-icons/pi";
import axios from "axios";
import { formatDate } from "../helper/formatDate";
import { firstWordCapital } from "../helper/firstWordCapital";

interface TaskProps {
  ID: number;
  title: string;
  priority: string;
  deadline: Date;
  completed: boolean;
}

interface Props {
  task: TaskProps;
  setRefetch: (state: boolean) => void;
}

export const TaskItem: React.FC<Props> = ({ task, setRefetch }) => {
  const getIconTaskPriority = (priority: string) => {
    switch (priority) {
      case "Low":
        return <PiCellSignalLowFill />;
      case "Medium":
        return <PiCellSignalMediumFill />;
      case "High":
        return <PiCellSignalFullFill />;
    }
  };

  const deleteTask = async (id: number) => {
    try {
      const response = await axios.delete(`http://localhost:8080/task/delete/${id}`);
      if (response.status == 200) {
        setRefetch(true);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const date = formatDate(task.deadline);

  return (
    <section className='bg-white w-full rounded-lg my-2 p-4 flex items-center'>
      <div className='flex flex-col gap-2 flex-1'>
        <h3 className='text-2xl font-semibold'>{firstWordCapital(task.title)}</h3>
        <div className='flex gap-1 items-center'>
          <IoMdTime className='text-xl' />
          <p>{date}</p>
        </div>
        <div className='flex gap-4'>
          <div className='flex gap-1 items-center'>
            {getIconTaskPriority(task.priority)}
            <p>{task.priority}</p>
          </div>
          <div className='flex gap-1 items-center'>
            <RiHourglass2Fill className='text-lg' />
            {task.completed ? "Completed" : "In Progress"}
          </div>
        </div>
      </div>
      <div className='text-3xl flex gap-4'>
        <button>
          <FaRegEdit className='text-blue-700 hover:text-blue-800' />
        </button>
        <button onClick={() => deleteTask(task.ID)}>
          <MdDelete className='text-red-700 hover:text-red-800' />
        </button>
        <button>
          <IoMdDoneAll className='text-green-700 hover:text-green-800' />
        </button>
      </div>
    </section>
  );
};
