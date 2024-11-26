import { BiTaskX } from "react-icons/bi";

export const TaskEmpty = () => {
  return (
    <section className='bg-white w-96 flex flex-col gap-2 items-center py-12 rounded-lg mt-24'>
      <BiTaskX className='text-9xl' />
      <p className='text-2xl font-bold'>Oops! No Task</p>
      <p>You Need to create some tasks to do</p>
      <button className='bg-[#40A7A0] text-white w-28 h-8 rounded-full hover:bg-[#29706B] font-semibold'>Add Now</button>
    </section>
  );
};
