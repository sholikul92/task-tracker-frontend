import React, { useEffect, useState } from "react";
import { TaskEmpty } from "../components/TaskEmpty";
import { TaskItem } from "../components/TaskItem";
import { Header } from "../components/header";
import axios from "axios";
import { MoonLoader } from "react-spinners";

interface ApiResponse {
  ID: number;
  title: string;
  priority: string;
  deadline: Date;
  completed: boolean;
}

export const Task = () => {
  const [tasks, setTasks] = useState<ApiResponse[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [refetch, setRefecth] = useState<boolean>(false);
  const [taskByOption, setTaskByOption] = useState<ApiResponse[] | null | undefined>(null);
  const [option, setOption] = useState<string>("All");
  // const base_url = import.meta.env.VITE_BASE_URL;

  const fetchApi = async () => {
    try {
      const response = await axios.get(`/task`);
      setTasks(response.data);
    } catch (err) {
      if (err instanceof axios.AxiosError) {
        setError(err.message);
      }
    } finally {
      setLoading(false);
      setRefecth(false);
    }
  };

  useEffect(() => {
    fetchApi();
  }, [refetch]);

  useEffect(() => {
    if (option === "All") {
      setTaskByOption(tasks);
    } else if (option === "Completed") {
      setTaskByOption(tasks?.filter((task) => task.completed === true));
    } else if (option === "Not-completed") {
      setTaskByOption(tasks?.filter((task) => task.completed === false));
    }
  }, [option, tasks]);

  const handleOption: React.ReactEventHandler<HTMLSelectElement> = (e) => {
    setOption(e.currentTarget.value);
  };

  const TaskList = taskByOption?.map((task) => {
    return <TaskItem task={task} key={task.ID} setRefetch={setRefecth} />;
  });

  if (error != null) {
    return <p>{error}</p>;
  }

  return (
    <div className='bg-[#E9EDF2] min-h-screen px-56 pt-10'>
      <Header path='/add' value='Add Task' />
      <div className='flex justify-end mb-4'>
        <select name='view-task' id='view-task' className='bg-white w-80 rounded-lg p-2' onChange={handleOption}>
          <option value='All'>All</option>
          <option value='Completed'>Completed</option>
          <option value='Not-completed'>Not Completed</option>
        </select>
      </div>
      <div className='flex flex-col items-center'>{loading ? <MoonLoader /> : taskByOption?.length == 0 ? <TaskEmpty /> : TaskList}</div>
    </div>
  );
};
