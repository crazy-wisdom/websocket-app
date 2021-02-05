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

  // const urlPrefix = PageService.urlPrefix;
  const urlPrefix = '';

  let talkData = useSelector((state: { talkData: any }) => state.talkData);

  React.useEffect(() => {
    const ws = new WebSocket('ws://localhost:3030');

    ws.onopen = function() {
      console.log('WS connected'); 
      ws.send('Hello, This is WS client.');
    }

    ws.onmessage = function(event) {
      dispatch({
        type: 'talkData',
        value: JSON.parse(event.data)
      });
    };
  }, [talkData]);


  return (
    <Switch>

      <Route path={`${urlPrefix}/talks`} component={Index} exact />
      <Route path={`${urlPrefix}/talks/:id`} component={Show} />
      <Route path={`${urlPrefix}/talks/new`} component={New} />

    </Switch>
  )
}


export default APP;
