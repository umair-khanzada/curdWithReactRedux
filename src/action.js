/**
 * Created by UmairAhmed on 2/14/2017.
 */

function setGame(games) {
    console.log("games", games)
    return {
        type: 'SET_GAME',
        games
    }
}
export default function fetchGames(){
    return (dispatch) => {
        fetch('https://liveadmin.herokuapp.com/api/games/event/4')
            .then(res => res.json())
            .then(data => dispatch(setGame(data)));
    }
}