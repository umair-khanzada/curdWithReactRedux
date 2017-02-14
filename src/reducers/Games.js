/**
 * Created by appBakerz - 05 on 13-Feb-17.
 */

import { FETCHING, FETCHED, ERROR } from '../action'

export default function(state = {loading: false, games: []}, action){
    switch (action.type) {
        case FETCHING:
            return Object.assign({}, state, {loading: true});
        case FETCHED:
            return {loading: false, games: action.games};
        case ERROR:
            return {loading: false, games: action.games};
        default:
            return state
    }

}