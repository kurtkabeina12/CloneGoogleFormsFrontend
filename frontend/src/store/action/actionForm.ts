export const SET_SELECTED_COMPONENT = 'SET_SELECTED_COMPONENT';

export const setSelectedComponent = (component:string) => ({
  type: SET_SELECTED_COMPONENT,
  payload: component,
});
