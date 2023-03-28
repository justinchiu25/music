import axios from 'axios';

const initialState = {};

const SET_SONGS = "SET_SONGS";

const _setSongs = (songs) => {
    return {
        type: SET_SONGS,
        songs
    }
}

export const setSongs = (songId) => {
    return async (dispatch) => {
        //get from backend server localhost api/song/:id\
        try {
            console.log("Hello");
            const { data } = await axios.get(`http://localhost:4000/api/song/${songId}`);
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