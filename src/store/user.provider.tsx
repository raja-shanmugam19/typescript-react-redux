import React, { useReducer, createContext, useEffect } from 'react';
import userReducer from './user.reducer';
import UserContext from './user.context';
import { initialState} from './user.state';
import { FETCH_USERS, SET_ERROR } from '../components/commons/constants';
import { fetchUsers } from '../components/services/UserService';

export function UserProvider(props: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(userReducer, initialState);
    console.log('state', state)
      useEffect(() => {
         fetchUsers()
          .then((data) => {
            dispatch({
              type: FETCH_USERS,
              payload: data,
            });
          })
          .catch((error) => {
            dispatch({
              type: SET_ERROR,
              payload: error,
            });
          });
  }, []);  
  
  return (
    <UserContext.Provider value={{ state , dispatch}} >
            {props.children}
    </UserContext.Provider>
  )
    ;

}