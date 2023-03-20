import { useEffect, useState } from 'react';
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai";
import { BiSkipNext, BiSkipPrevious } from "react-icons/bi";
import { IconContext } from "react-icons";

export default function Homepage() {

    const [isPlaying, setIsPlaying] = useState(false);

    const playingButton = () => {
        if (isPlaying) {
            //Set sound to stop
            setIsPlaying(false);
        } else {
            //Set sound to play
            setIsPlaying(true);
        }
    }
    return (
          <div>
            <div className='player'>
                <button className="playButton">
                <IconContext.Provider value={{ size: "3em", color: "#27AE60" }}>
                    <BiSkipPrevious />
                </IconContext.Provider>
                </button>
                {!isPlaying ? (
                <button className="playButton" onClick={playingButton}>
                    <IconContext.Provider value={{ size: "3em", color: "#27AE60" }}>
                    <AiFillPlayCircle />
                    </IconContext.Provider>
                </button>
                ) : (
                <button className="playButton" onClick={playingButton}>
                    <IconContext.Provider value={{ size: "3em", color: "#27AE60" }}>
                    <AiFillPauseCircle />
                    </IconContext.Provider>
                </button>
                )}
                <button className="playButton">
                <IconContext.Provider value={{ size: "3em", color: "#27AE60" }}>
                    <BiSkipNext />
                </IconContext.Provider>
                </button>
            </div>
          </div>
      );
}