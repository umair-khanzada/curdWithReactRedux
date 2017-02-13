/**
 * Created by appBakerz - 05 on 13-Feb-17.
 */

export default function(state = [], action){
    switch (action.type) {
        case 'SET_GAME':
            return action.games;
        default:
            return state
    }

}