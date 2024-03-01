export interface Action {
  type: string;
}

export interface ActionForm{
  type: string;
  payload?: any;
}

export interface FormState {
  selectedComponent: string;
}

export interface NavigationState {
  currentPage: string;
}

export interface RootState {
  form: FormState;
  navigation: NavigationState;
}