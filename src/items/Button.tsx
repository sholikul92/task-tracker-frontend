type Props = {
  title: string;
  handleClick?: () => void;
};

export const Button = (props: Props) => {
  return (
    <button className='bg-gradient-to-b from-blue-500 to-[#2847F9] px-6 py-2 rounded-full text-white font-semibold' onClick={props.handleClick}>
      {props.title}
    </button>
  );
};
