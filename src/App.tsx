import * as React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux';

import * as PageService from './services/page-service';

import Index from './talks/index';
import Show from './talks/show';
import New from './talks/new';


const APP = () => {
  const dispatch = useDispatch();

  const urlPrefix = PageService.urlPrefix;
  const apiUrl = PageService.apiUrl;
  const wsUrl = PageService.wsUrl;

  React.useEffect(() => {
    fetch(`${apiUrl}/api/talks`)
    .then(res => res.json())
    .then(
      (result) => {
        dispatch({
          type: 'talks',
          value: result
        });
      },

      (error) => {
      }
    )
  }, []);


  React.useEffect(() => {
    const ws = new WebSocket(`${wsUrl}`);

    // console.log(`${urlPrefix}/talks`)

    ws.onopen = function() {
      console.log('WS connected'); 
      ws.send('Hello, This is WS client.');
    }

    ws.onmessage = function(event) {
      console.log('Receive talks by ws');
      console.log(JSON.parse(event.data).talks);
      dispatch({
        type: 'talks',
        value: JSON.parse(event.data).talks
      });
    };
  }, []);


  return (
    <Switch>

      <Route path={`${urlPrefix}/talks`} component={Index} exact />
      <Route path={`${urlPrefix}/talks/new`} component={New} exact />
      <Route path={`${urlPrefix}/talks/:id`} component={Show} />

    </Switch>
  )
}


export default APP;
