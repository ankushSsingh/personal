import content from "@/public/content";
const interval = 1000;
let index = 0;

const updateIndex = ( index : number ) : void => {
    const textlength = content.changing_text.length ; 
    index =  ( index + 1 )%textlength ;
};

export function getChangingText(){
    const texts = content.changing_text;
    setInterval(updateIndex, interval)
    return texts[index];

};