import { useEffect, useState } from "react";
import content from "@/public/content";

const RegularUpdateComponent = () => {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState(content.changing_text[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prevIndex => {
        const newIndex = (prevIndex + 1) % content.changing_text.length;
        setText(content.changing_text[newIndex]);
        return newIndex;
      });
    }, 300);

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div  className="flex text-2xl font-bold">
      <p>
        {text}
      </p>
      <p className="animate-blink">
      |
    </p>    
  </div>
  );
};

export default RegularUpdateComponent;