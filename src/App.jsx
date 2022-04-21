/* eslint-disable require-jsdoc */
/* eslint-disable max-len */
import styleApp from './App.module.css';
import React from 'react';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Main from './Components/Main/Main/Main';
import Tasks from './Components/Main/Tasks/Tasks';
import YourTasks from './Components/Main/Tasks/YourTasks/YourTasks';
import FullTask from './Components/Main/Tasks/YourTasks/FullTasks/FullTasks';
import Wallet from './Components/Main/Wallet/Wallet';
import Profile from './Components/Main/Profile/Profile';
import Aside from './Components/Aside/Aside';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className={styleApp.App}>
        <Header />
        <Aside />
        <div className={styleApp.content}>
          <Routes>
            <Route path="" element={<Main/>}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/tasks" element={<Tasks/>}/>
            <Route path="/yourtasks" element={<YourTasks/>}/>
            <Route path="/yourtasks/1"
              element={<FullTask name="Find X" category="Math" description="Find X in Triangle" additional="None" deadline="17:40" cost="5000" id="1" />}/>
            <Route path="/yourtasks/2"
              element={<FullTask name="Find Y" category="Math" description="Find Y in Triangle" additional="None" deadline="12:50" cost="2000" id="2" />}/>
            <Route path="/yourtasks/3"
              element={<FullTask name="Find Z" category="Math" description="Find Z in Triangle" additional="None" deadline="23:20" cost="3500" id="3" />}/>
            <Route path="/yourtasks/4"
              element={<FullTask name="Find A" category="Math" description="Find A in Triangle" additional="None" deadline="20:00" cost="1000" id="4" />}/>
            <Route path="/wallet" element={<Wallet/>}/>
          </Routes>

        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
