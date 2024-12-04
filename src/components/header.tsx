import { useNavigate } from "react-router-dom";
import { Button } from "../items/Button";

interface Props {
  path: string;
  value: string;
}

export const Header = (props: Props) => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(props.path);
  };
  return (
    <div className='flex justify-between mb-10'>
      <h1 className='text-4xl font-bold'>Task Tracker</h1>
      <Button title={props.value} handleClick={handleNavigate} />
    </div>
  );
};
