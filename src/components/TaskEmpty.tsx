import { BiTaskX } from "react-icons/bi";
import { Button } from "../items/Button";
import { useNavigate } from "react-router-dom";

export const TaskEmpty = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/add");
  };
  return (
    <section className='bg-white w-96 flex flex-col gap-2 items-center py-12 rounded-lg mt-24'>
      <BiTaskX className='text-9xl' />
      <p className='text-2xl font-bold'>Oops! No Task</p>
      <p className='mb-4'>You Need to create some tasks to do</p>
      <Button title='Add Now' handleClick={handleNavigate} />
    </section>
  );
};
