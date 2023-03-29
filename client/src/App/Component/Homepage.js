import react, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSongs } from '../Redux/Songs';
import Song from './Song';


export default function Homepage() {
    const dispatch = useDispatch();
    const songs = useSelector((state) => state.songs);

    useEffect( () => {
        //setSongs to something?
        dispatch(setSongs(2));
    }, [dispatch])
    return (
        <div className='music-table'>
                <div> Homepage </div>
                <div> Image </div>
            <table className='music-container'>
                <thead>
                    <tr>
                        <th> Song </th>
                        <th> Artist </th>
                    </tr>
                </thead>
                <thead>
                        {songs.map((element, index) => {
                            return <Song key={index} data={element} />
                        })}
                </thead>
            </table>
            <img src={songs.image} />
        </div>
    )
}