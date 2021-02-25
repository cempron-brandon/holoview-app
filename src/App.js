import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import NavBar from './components/layout/NavBar';
import Dashboard from './components/layout/Dashboard';
import SideBar from './components/sidebar/SideBar';

import {CHANNEL_ID} from './utils/constants';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="flex-grid-content">
          <SideBar />
          <div className="main">
            <Switch>
              {/* HOME */}
              <Route exact path='/' render={()=>{return <Dashboard id={CHANNEL_ID.HOSHIMACHI_SUISEI}/>}}/>
              {/* HOLOEN GEN 1 */}
              <Route exact path={`/channel/${CHANNEL_ID.MORI_CALLIOPE}`} render={()=>{return <Dashboard id={CHANNEL_ID.MORI_CALLIOPE}/>}}/>
              <Route exact path={`/channel/${CHANNEL_ID.TAKANASHI_KIARA}`} render={()=>{return <Dashboard id={CHANNEL_ID.TAKANASHI_KIARA}/>}}/>
              <Route exact path={`/channel/${CHANNEL_ID.NINOMAE_INANIS}`} render={()=>{return <Dashboard id={CHANNEL_ID.NINOMAE_INANIS}/>}}/>
              <Route exact path={`/channel/${CHANNEL_ID.GAWR_GURA}`} render={()=>{return <Dashboard id={CHANNEL_ID.GAWR_GURA}/>}}/>
              <Route exact path={`/channel/${CHANNEL_ID.WATSON_AMELIA}`} render={()=>{return <Dashboard id={CHANNEL_ID.WATSON_AMELIA}/>}}/>
              {/* HOLOJP GEN 0 */}
              <Route exact path={`/channel/${CHANNEL_ID.TOKINO_SORA}`} render={()=>{return <Dashboard id={CHANNEL_ID.TOKINO_SORA}/>}}/>
              <Route exact path={`/channel/${CHANNEL_ID.ROBOCO}`} render={()=>{return <Dashboard id={CHANNEL_ID.ROBOCO}/>}}/>
              <Route exact path={`/channel/${CHANNEL_ID.SAKURA_MIKO}`} render={()=>{return <Dashboard id={CHANNEL_ID.SAKURA_MIKO}/>}}/>
              <Route exact path={`/channel/${CHANNEL_ID.HOSHIMACHI_SUISEI}`} render={()=>{return <Dashboard id={CHANNEL_ID.HOSHIMACHI_SUISEI}/>}}/>
              <Route exact path={`/channel/${CHANNEL_ID.AZKI}`} render={()=>{return <Dashboard id={CHANNEL_ID.AZKI}/>}}/>
              {/* <Route exact path={`/channel/${CHANNEL_ID.SHIRAKAMI_FUBUKI}`} render={()=>{return <Dashboard id={CHANNEL_ID.SHIRAKAMI_FUBUKI}/>}}/> */}
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
