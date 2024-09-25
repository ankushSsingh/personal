import React, { useEffect, useState } from 'react';
import content from '@/public/content';

const RedditTrending = () => {

  const [trendings, setTrendings] = useState([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const readreddit = async () => {
        try {
            const response = await fetch('/api/reddit');
            if (!response.ok) {
                // console.log(response);
                throw new Error('Network response was not ok');
            }
            // console.log(response.json());
            const data = await response.json();
            setTrendings(data);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        readreddit();
    }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className='flex flex-col space-y-2'>

            <div className="flex flex-col justify-center ">
                {trendings.map((subreddit, i) => (
                <div key={i} className='py-0.5'>
                    <div className='flex flex-row space-x-2 '>
                        <div className='flex flex-row space-x-1 w-2/3  bg-gray-600   hover:bg-black text-sm'>
                            <div className='p-2 font-bold bg-white text-red'>
                                #
                            </div>
                            <div className=" p-2 font-serif text-white">
                                <a href={'https://www.reddit.com/'+subreddit}> {subreddit}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                ))}
            </div>
        
    </div>
  );
};

export default RedditTrending;
