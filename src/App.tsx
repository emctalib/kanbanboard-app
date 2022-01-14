import React, { useState, useEffect } from 'react';
import { PlusCircleFill } from 'react-bootstrap-icons';
import logo from './logo.svg';
import TaskContainer from './components/TaskContainer';
import { LoginUserInfo } from './data/dataInfo';

import './App.css';

function App() {
  const currentUser = new LoginUserInfo(1, "John Amy", "john@example.com");

  return (
    <>
      <TaskContainer type='text' currentUser={currentUser}></TaskContainer>
    </>
  );
}

export default App;
