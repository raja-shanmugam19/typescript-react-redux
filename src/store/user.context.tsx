
import React, { createContext } from 'react';
import {State, initialState} from './user.state';
import { Action } from './user.actions';


interface UserContextType {
    state: State;
    dispatch: React.Dispatch<Action>;
}
  
const UserContext = createContext<UserContextType>({ state: initialState ,dispatch: () => {}});


export default UserContext;
  

