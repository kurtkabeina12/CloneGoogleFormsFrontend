import { NAVIGATE_TO_CREATE_FORM } from '../action/actionsNavigation';
import { Action } from '../../types/types';

const initialState = {
  currentPage: 'HomePage',
};

const navigationReducer = (state = initialState, action:Action) => {
  switch (action.type) {
    case NAVIGATE_TO_CREATE_FORM:
      return { ...state, currentPage: 'CreateFormPage' };
    default:
      return state;
  }
};

export default navigationReducer;
