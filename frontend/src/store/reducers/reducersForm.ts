import { ActionForm } from '../../types/types';
import { SET_SELECTED_COMPONENT } from '../action/actionForm';

interface State {
  selectedComponent: string;
}

const initialState: State = {
  selectedComponent: '',
};

const formReducer = (state: State = initialState, action: ActionForm): State => {
  switch (action.type) {
    case SET_SELECTED_COMPONENT:
      return { ...state, selectedComponent: action.payload };
    default:
      return state;
  }
};

export default formReducer;