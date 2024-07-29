import React, { useEffect, useState } from 'react';
import content from '@/public/content';
export interface Thought {
  post: string;
  _id : string
}

const Thoughts: React.FC<{ key: number }> = ({ key }) => {
  const [thoughts, setThoughts] = useState<Thought[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchThoughts = async () => {
        try {
            const response = await fetch('/api/thoughts');
            if (!response.ok) {
                // console.log(response);
                throw new Error('Network response was not ok');
            }
            const data: Thought[] = await response.json();
            setThoughts(data.reverse());
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    const deleteThoughts = async (id : string) => {
        try {
            const response = await fetch('/api/thoughts', {
                                method: 'DELETE',
                                headers: {
                                    'Content-Type': 'application/json',
                                },
                                body: JSON.stringify({ id }),
                            });
            if (!response.ok) {
                console.log(response);
                throw new Error('Network response was not ok');
            }
        } catch (error) {
            console.log(error);
            console.log('Failed deleting stuff!');
        } 
        fetchThoughts();
    };

    useEffect(() => {
        fetchThoughts();
    }, [key]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className='flex flex-col space-y-2'>
        <div className="overflow-y-hidden overflow-x-hidden h-full box-border">
            <div className="bg-gray-400 mx-20 flex justify-center">
                <div className=" my-1 bg-white w-full break-words box-border font-light ">
                    <div className="p-2">
                        <text className='font-bold animate-blink bg-black text-white p-2' > {thoughts.length}
                            </text> {content.Thoughts} 
                    </div>
                </div>
            </div>
        </div>
            <div className="flex flex-col justify-center mx-20">
                {thoughts.map((thought, i) => (
                <div key={i} className='py-0.5'>
                    <div className='flex flex-row space-x-2 '>
                        <div className='flex flex-row space-x-1 w-2/3  bg-gray-600   hover:bg-black'>
                            <div className='p-2 font-bold bg-white text-red'>
                                #
                            </div>
                            <div className=" p-2 font-serif text-white">
                            {thought.post}
                            </div>
                        </div>
                        <div>
                            <button className="bg-black p-2  text-gray-50 text-sm  rounded-sm hover:scale-110" onClick={() => deleteThoughts(thought._id)} >
                                del
                            </button>
                        </div>
                    </div>
                </div>
                ))}
            </div>
        
    </div>
  );
};

export default Thoughts;
