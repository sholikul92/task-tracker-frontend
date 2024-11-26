import { TaskEmpty } from "../components/TaskEmpty";
import { TaskItem } from "../components/TaskItem";
import { Header } from "../components/header";

const tasks = [
  {
    title: "Makan",
    priority: "Low",
    deadline: "10-10-2024 08:08",
    inProgress: "In Progress",
  },
  {
    title: "Minum",
    priority: "Medium",
    deadline: "10-10-2024 08:08",
    inProgress: "In Progress",
  },
  {
    title: "Mandi",
    priority: "High",
    deadline: "10-10-2024 08:08",
    inProgress: "In Progress",
  },
];

const TaskList = tasks.map((task) => {
  return <TaskItem title={task.title} priority={task.priority} deadline={task.deadline} inProgress={task.inProgress} />;
});

export const Task = () => {
  return (
    <div className='bg-[#E9EDF2] min-h-screen px-56 pt-10'>
      <Header />
      <div className='flex flex-col items-center border'>{tasks.length == 0 ? <TaskEmpty /> : TaskList}</div>
    </div>
  );
};
