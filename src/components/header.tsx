import { useNavigate } from "react-router-dom";
import { Button } from "../items/Button";

export const Header = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/add");
  };
  return (
    <div className='flex justify-between mb-10'>
      <h1 className='text-4xl font-bold'>Task Tracker</h1>
      <Button title='Add Task' handleClick={handleNavigate} />
    </div>
  );
};
