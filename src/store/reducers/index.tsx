import { combineReducers } from 'redux';


type ActionProps = {
  type: string,
  value: any
};


const talks = (state = {}, action: ActionProps) => {
  if (action.type === 'talks') {
    const data =  {
      ...state,
      ...action.value
    }

    return data;
  }

  return state;
};


const rootReducer = combineReducers({
  talks
});


export default rootReducer;
