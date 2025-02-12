import React from 'react';
import Button from './Button';
import Wrapper from './Wrapper';

const InputURL: React.FC = () => {
  return (
    <Wrapper>
        <div className='-mt-25 z-1 mx-4 md:mx-0 flex flex-col md:flex-row items-center rounded-md p-6 md:p-8 bg-dark-violet bg-[url(assets/images/bg-shorten-mobile.svg)] md:bg-[url(assets/images/bg-shorten-desktop.svg)] bg-center bg-cover'>
            <input className='md:w-10/12 w-full bg-white rounded-sm ml-4 md:ml-0 px-4 py-2 mb-4 md:mb-0 font-poppins text-sm poppins-bold text-dark-violet mr-4' placeholder='Shorten a link here...' />
            <Button square>Shorten it!</Button>
        </div>
    </Wrapper>
  );
}

export default InputURL;