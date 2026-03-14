import {useState } from "react";


interface ButtonProps{
    title:string;
    cor:string;
}


export function Button({title, cor}:ButtonProps){
    const [numClicks, setNumClicks] = useState(1);

    return(
        <div>
            <button style={{ backgroundColor: cor }} onClick={() => setNumClicks(numClicks + 1)}>
                {title} ({numClicks})
            </button>
        </div>

    )
}