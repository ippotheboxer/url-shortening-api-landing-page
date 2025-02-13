import React, { useEffect, useState } from 'react';
import Button from '../Button';
import Wrapper from '../Wrapper';
import { shortenLink } from '../../api/shortenLink';
import LinkListItem from './LinkListItem';

const InputURL: React.FC = () => {
  const [url, setUrl] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [urlLinks, setUrlLinks] = useState<any[]>([]);

  useEffect(() => {
    const past_url_links = JSON.parse(localStorage.getItem('urlItems') || "[]");
    setUrlLinks(past_url_links);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (url.trim() === "") {
      setError("Please add a link");
    } 
    else {
      setError("");
      const shortenedURL = await shortenLink(url);

      const items = JSON.parse(localStorage.getItem('urlItems') || "[]");
      const newURL = {
        url: url,
        shortenedURL: shortenedURL
      }      
      const newItems = JSON.stringify([...items, newURL]);
      localStorage.setItem('urlItems', newItems);

      const past_url_links = JSON.parse(localStorage.getItem('urlItems') || "[]");
      setUrlLinks(past_url_links);
      }
  }

  return (
    <Wrapper>
      <div className='mb-6 -mt-30 z-1 mx-4 md:mx-0 rounded-md p-8 md:p-12 bg-dark-violet bg-[url(assets/images/bg-shorten-mobile.svg)] md:bg-[url(assets/images/bg-shorten-desktop.svg)] bg-center bg-cover'>
        <form onSubmit={handleSubmit} className='flex flex-col md:flex-row items-center'>
            <input
              value={url}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUrl(e.target.value)} 
              className={`${error === "" ? "" : "border-red border-2 text-red"} 
              md:w-10/12 w-full bg-white rounded-sm ml-4 md:ml-0 px-4 py-2 mb-4 md:mb-0 font-poppins text-sm poppins-medium text-dark-violet mr-4`} 
              placeholder='Shorten a link here...' />
            <Button type='submit' square>Shorten it!</Button>
          </form>
          {error !== "" && <p className='font-poppins text-sm pt-2 italic text-red'>{error}</p>}
          </div>
          {urlLinks.map((item, index) => 
          <LinkListItem key={index} givenURL={item.url} shortenedURL={item.shortenedURL} />
          )}
    </Wrapper>
  );
}

export default InputURL;