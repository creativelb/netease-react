import * as actionType from './action-type'

let initState = {
    currentSong: null,
    currentIndex: 0,
    playlist: [],
    isPlaying: false
}

const Player = function(state = initState, action) {
    let actionType = action.type
    switch (actionType) {
        case actionType.IS_PLAYING:
            state.isPlaying = true;
            return state
        case actionType.UN_IS_PLAYING:
            state.isPlaying = false;
            return state
        case actionType.TOGGLE_PLAYING:
            state.isPlaying = !state.isPlaying;
        return state
        default:
            return state
    }
}

export default Player