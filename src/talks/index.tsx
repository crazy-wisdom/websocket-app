import * as React from 'react';

import {
  useSelector,
  useDispatch
} from 'react-redux';

import {
  useHistory,
  useParams
} from "react-router-dom";

import * as PageService from '../services/page-service';

import BaseLayout from '../layouts/base-layout';


const Index = () => {
  const history = useHistory();
  const talks = useSelector((state: { talks: any }) => state.talks);
  const talkIds = Object.keys(talks);
  const urlPrefix = PageService.urlPrefix;


  function showNew(event: React.MouseEvent) {
    try {
      
      history.push(`${urlPrefix}/talks/new`);
    } catch (error) {
      // console.log(error.message);
    }
  }

  return (
    <BaseLayout>
        <div className="main-content">

          <div className="container">
            {talkIds.length === 0 &&
              <div className="subscribe-hint">
                <p>
                  There are no talks now. Please start you idea.
                </p>

                <button className="submit-btn" onClick={showNew}>Start Talk</button>
              </div>
            }

            {talkIds.length > 0 &&

              <ul className="talk-list">
                {talkIds.map((id: any, index) =>
                  <li key={index}>
                    <div className="title">
                      <i className="fa fa-caret-up" aria-hidden="true"></i>
                      <div className="text">
                        {talks[id].title}
                      </div>
                    </div>

                    <div className="sub-title">
                      <span className="time">4 hours ago</span>
                    </div>
                  </li>
                )}
              </ul>
            }
          </div>

        </div>

    </BaseLayout>
  )
}


export default Index;
