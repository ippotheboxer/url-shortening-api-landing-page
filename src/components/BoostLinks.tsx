import React from 'react';
import Button from './Button';
import Wrapper from './Wrapper';

const BoostLinks: React.FC = () => {
  return (
    <div className='flex flex-col items-center text-center bg-center bg-cover bg-dark-violet bg-[url(assets/images/bg-boost-desktop.svg)]'>
        <Wrapper>
            <h2 className='text-white font-poppins poppins-bold p-8 text-3xl md:text-4xl'>Boost your links today</h2>
            <Button>Get started</Button>
        </Wrapper>
    </div>
  );
}

export default BoostLinks;