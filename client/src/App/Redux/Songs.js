import axios from 'axios';

const initialState = [];

const SET_SONGS = "SET_SONGS";

const _setSongs = (songs) => {
    return {
        type: SET_SONGS,
        songs
    }
}

export const setSongs = () => {
    return async (dispatch) => {
        //get from backend server localhost api/song/:id\
        try {
            const { data } = await axios.get(`http://localhost:4000/api/song`);
            console.log(data);
            dispatch(_setSongs(data));
        } catch (error) {
            console.error(error);
        }
    }
}

export default function songReducer(state = initialState, action) {
    switch (action.type) {
        case SET_SONGS:
            return action.songs;
        default:
            return state;
    }
}