import React from 'react';

interface Props {
    givenURL: string;
    shortenedURL: string;
}

const LinkListItem: React.FC<Props> = ({givenURL, shortenedURL, ...props}) => {
  return (
    <div className='mb-4 mt-6 xl:px-42 lg:px-28 md:px-10 sm:px-8 px-6'>
      <div {...props} className='bg-white rounded-sm flex md:flex-row flex-col md:items-center justify-between font-poppins poppins-medium'>
          <h4 className='px-6 py-3 text-black border-gray/20 border-b-2 md:border-0'>{givenURL}</h4>
          <div className='px-6 py-3 flex md:flex-row flex-col md:items-center'>
              <h4 className='pb-2 md:pb-0 text-cyan pr-8'>{shortenedURL}</h4>
              <button 
                className='bg-cyan font-poppins text-white poppins-bold py-2 px-6 rounded-sm hover:cursor-pointer w-10/12 mb-2 md:mb-0'
                onClick={() =>  navigator.clipboard.writeText(shortenedURL)}
                >
                Copy
              </button>
            </div>
      </div>
      </div>
  );
}

export default LinkListItem;