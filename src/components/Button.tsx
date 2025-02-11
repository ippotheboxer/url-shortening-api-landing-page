import React from 'react';

interface Props {
    children: React.ReactNode;
  }

const Button: React.FC<Props> = ({children}) => {
  return (
    <button className="bg-cyan text-white py-3 px-10 md:py-2 md:px-6 rounded-4xl font-poppins text-lg md:text-sm hover:bg-cyan/50 hover:cursor-pointer transition duration-300 ease-in-out poppins-bold">
        {children}
    </button>
  );
}

export default Button;