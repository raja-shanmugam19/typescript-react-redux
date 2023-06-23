import React from 'react';
import logo from './logo.svg';
import { UserComponent } from './components/UserComponent';
import  {UserProvider}  from './store/user.provider';

import './App.css';

function App() {
  return (
    <UserProvider>
    <UserComponent/>
    </UserProvider>
      
  );
}

export default App;
