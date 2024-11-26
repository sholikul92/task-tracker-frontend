import { useEffect, useState } from "react";
import { TaskEmpty } from "../components/TaskEmpty";
import { TaskItem } from "../components/TaskItem";
import { Header } from "../components/header";
import axios from "axios";
import { MoonLoader } from "react-spinners";

interface ApiResponse {
  id: number;
  title: string;
  priority: string;
  deadline: Date;
  completed: boolean;
}

export const Task = () => {
  const [tasks, setTasks] = useState<ApiResponse[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
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
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);

  const TaskList = tasks?.map((task) => {
    return <TaskItem title={task.title} priority={task.priority} deadline={task.deadline} completed={task.completed} key={task.id} />;
  });

  if (error != null) {
    return <p>{error}</p>;
  }

  return (
    <div className='bg-[#E9EDF2] min-h-screen px-56 pt-10'>
      <Header />
      {loading ? <MoonLoader /> : <div className='flex flex-col items-center border'>{tasks?.length == 0 ? <TaskEmpty /> : TaskList}</div>}
    </div>
  );
};
