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



const Show = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
  }, []);


  return (
    <BaseLayout>
      <div>
        show
      </div>
    </BaseLayout>
  )
}


export default Show;
