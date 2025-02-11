import React from 'react';
// Components
import Button from './Button';
import Wrapper from './Wrapper';
// Images
import illustrationImg from "../assets/images/illustration-working.svg";

const Hero:React.FC = () => {
  return (
    <Wrapper>
        <section className='flex flex-col md:grid md:grid-cols-2 items-center'>
            <img src={illustrationImg} alt="Illustration of a person working at a computer" className='md:order-1 w-120 sm:w-140 md:w-200 pb-8 md:pb-0' />
            <div className='flex items-center flex-col text-center md:text-start md:items-start md:mr-4'>
                <h1 className='pb-4 md:pb-8 w-10/12 md:w-12/12 font-poppins poppins-bold text-[44px] md:text-5xl ld:text-8xl text-very-dark-blue leading-12'>More than just shorter links</h1>
                <p className='pb-4 w-10/12 md:w-9/12 font-poppins poppins-medium text-lg md:text-lg lg:text-xl text-grayish-violet'>Build your brand's recognition and get detailed insights on how your links are performing.</p>
                <Button>Get Started</Button>
            </div>
        </section>
    </Wrapper>
  );
}

export default Hero;