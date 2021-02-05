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
  let talkData = useSelector((state: { talkData: any }) => state.talkData);

  React.useEffect(() => {
    console.log('xxx====')
    console.log(talkData)
    console.log('xxx====')
  }, [talkData]);

  return (
    <BaseLayout>
      <ul className="talk-list">
        {Object.keys(talkData).map((id: any) =>
          <li key={id}>
            <div className="title">
              <i className="fa fa-caret-up" aria-hidden="true"></i>
              <div className="text">
                {talkData[id].title}
              </div>
            </div>

            <div className="sub-title">
              <span className="time">4 hours ago</span>
              <span className="">&nbsp;|&nbsp;</span>
              <span className="author">King</span>
            </div>
          </li>
        )}

        {/* <li>
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

        </li> */}

      </ul>
    </BaseLayout>
  )
}


export default Index;
