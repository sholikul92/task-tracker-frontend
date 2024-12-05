import { useNavigate } from "react-router-dom";
import { Button } from "../items/Button";
import React from "react";

interface Props {
  path: string;
  value: string;
}

export const Header: React.FC<Props> = ({ path, value }) => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(path);
  };
  return (
    <div className='flex justify-between mb-10'>
      <h1 className='text-4xl font-bold'>Task Tracker</h1>
      <Button title={value} handleClick={handleNavigate} />
    </div>
  );
};
