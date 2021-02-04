import * as React from 'react';

import {
  useSelector,
  useDispatch
} from 'react-redux';

import {
  useParams
} from "react-router-dom";

import * as PageService from '../services/page-service';

import BaseLayout from '../layouts/base-layout';


const Index = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
  }, []);

  return (
    <BaseLayout>
      <ul className="talk-list">
        <li>
          <div className="title">
            <i className="fa fa-caret-up" aria-hidden="true"></i>
            <div className="text">
              My product is my garden
            </div>
          </div>

          <div className="sub-title">
            <span className="time">4 hours ago</span>
            <span className="">&nbsp;|&nbsp;</span>
            <span className="author">King</span>
          </div>

        </li>

      </ul>
    </BaseLayout>
  )
}


export default Index;
