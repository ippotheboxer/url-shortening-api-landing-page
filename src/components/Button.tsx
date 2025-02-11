import React from 'react';

interface Props {
    children: React.ReactNode;
  }

const Button: React.FC<Props> = ({children}) => {
  return (
    <button className='bg-cyan text-white py-2 px-6 rounded-4xl font-poppins text-sm hover:bg-cyan/50 hover:cursor-pointer transition duration-300 ease-in-out'>
        {children}
    </button>
  );
}

export default Button;