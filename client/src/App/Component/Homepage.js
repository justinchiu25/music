import react, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSongs } from '../Redux/Songs';
//Redux for songs


export default function Homepage() {
    const dispatch = useDispatch();
    const songs = useSelector((state) => state.songs);

    useEffect( () => {
        //setSongs to something?
        dispatch(setSongs(1));
    }, [dispatch])
    return (
        <div className='music-table'>
                <div> Homepage </div>
                <div> Image </div>
            <table className='music-container'>
                <thead>
                    <tr>
                        <th> {songs.title} </th>
                        <th> {songs.artist} </th>
                    </tr>
                </thead>
            </table>
            <img src={songs.image} />
        </div>
    )
}