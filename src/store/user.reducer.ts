import { State } from './user.state';
import { Action } from './user.actions';
import { FETCH_USERS, SET_ERROR, FILTER_USERS, FETCH_USERS_POST } from '../components/commons/constants';


export default function userReducer(state: State, action: Action): State {
    console.log('action value', action);
    switch (action.type) {
        case FETCH_USERS:
            return {
                ...state,
                users: action.payload,
                loading: false,
            };
        case FETCH_USERS_POST:
            return {
                ...state,
                posts: action.payload,
                username: action.name,
                loading: false,
            };
        case FILTER_USERS:
                return {
                  ...state,
                filteredUsers: action.payload,
            };
        case SET_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false,
            };
        default:
            return state;
    }
}