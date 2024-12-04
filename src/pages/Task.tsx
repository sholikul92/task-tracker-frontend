import { useEffect, useState } from "react";
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

  const TaskList = tasks?.map((task) => {
    return <TaskItem task={task} key={task.ID} setRefetch={setRefecth} />;
  });

  if (error != null) {
    return <p>{error}</p>;
  }

  return (
    <div className='bg-[#E9EDF2] min-h-screen px-56 pt-10'>
      <Header />
      <div className='flex flex-col items-center'>{loading ? <MoonLoader /> : tasks?.length == 0 ? <TaskEmpty /> : TaskList}</div>
    </div>
  );
};
