import { combineReducers } from 'redux';


type ActionProps = {
  type: string,
  value: any
};


const talkData = (state = {}, action: ActionProps) => {
  if (action.type === 'talkData') {
    const data =  {
      ...state,
      ...action.value
    }

    return data;
  }

  return state;
};


const rootReducer = combineReducers({
  talkData
});


export default rootReducer;
