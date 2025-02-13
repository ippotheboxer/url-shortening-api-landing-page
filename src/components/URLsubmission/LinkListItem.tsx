import React from 'react';
import Button from '../Button';

interface Props {
    givenURL: string;
    shortenedURL: string;
}

const LinkListItem: React.FC<Props> = ({givenURL, shortenedURL, ...props}) => {
  return (
    <div {...props} className='bg-white px-6 py-3 mb-4 mt-6 rounded-sm flex flex-row items-center justify-between font-poppins poppins-medium'>
        <h4 className='text-black'>{givenURL}</h4>
        <div className='flex flex-row items-center'>
            <h4 className='text-cyan pr-8'>{shortenedURL}</h4>
            <button 
              className='bg-cyan font-poppins text-white poppins-bold py-2 px-6 rounded-sm hover:cursor-pointer'
              onClick={() => {}}
              >
              Copy
            </button>
          </div>
    </div>
  );
}

export default LinkListItem;