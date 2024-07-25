import React, { useEffect, useState } from 'react';
export interface Thought {
  post: string;
  _id : string
}

const Thoughts: React.FC<{ refresh: number }> = ({ refresh }) => {
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
            setThoughts(data);
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
    }, [refresh]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="flex flex-row justify-center">
      <div>
        {thoughts.map((thought, i) => (
          <div key={i}>
            <div className='flex flex-row space-x-2'>
                <div className='p-2 font-bold'>
                    #
                </div>
                <div className="w-2/3 p-2 font-semibold font-serif">
                {thought.post}
                </div>
                <div>
                    <button className="bg-black p-2  text-gray-50 text-sm  rounded-sm" onClick={() => deleteThoughts(thought._id)} >
                        delete
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
