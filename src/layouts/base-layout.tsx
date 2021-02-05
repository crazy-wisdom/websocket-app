import * as React from 'react';

import {
  useSelector,
  useDispatch
} from 'react-redux';

import {
  useParams
} from "react-router-dom";

import * as PageService from '../services/page-service';

import "../styles/main";


type Props = {
  children: React.ReactNode
}


const BaseLayout = ({ children }: Props) => {

  React.useEffect(() => {
  });

  return (
    <div>
      { children }
    </div>
  )
}

export default BaseLayout;
