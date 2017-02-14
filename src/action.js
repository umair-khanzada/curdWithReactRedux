/**
 * Created by UmairAhmed on 2/14/2017.
 */

export const FETCHING = 'FETCHING';
export const FETCHED = 'FETCHED';
export const ERROR = 'ERROR';

function action(action, games) {
    return {
        type: action,
        games
    }
}
export default function fetchGames(){
    return (dispatch) => {

        dispatch(action(FETCHING, []));

        fetch('https://liveadmin.herokuapp.com/api/games/event/4')
            .then(res => res.json())
            .then(data => dispatch(action(FETCHED, data)))
            .catch(function(error) {
                dispatch(action(ERROR, []))
            });
    }
}