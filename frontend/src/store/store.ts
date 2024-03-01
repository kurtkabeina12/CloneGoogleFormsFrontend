import { combineReducers } from 'redux';
import formReducer from './reducers/reducersForm';
import navigationReducer from './reducers/reducerNavigation';

const rootReducer = combineReducers({
  form: formReducer,
  navigation: navigationReducer,
});

export default rootReducer;
