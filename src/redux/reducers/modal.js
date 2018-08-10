import { 
	OPEN_MODAL,
  CLOSE_MODAL,
  TOGGLE_MODAL
} from 'redux/constants/action-types';

const initialState = {
  opened: false
};

export default function tutorial(state = initialState, action) {
  switch (action.type) {
    case OPEN_MODAL:
      return { 
      	...state,
        opened: action.newState 
    	};
    case CLOSE_MODAL:
      return { 
      	...state,
        opened: action.newState 
    	};
    case TOGGLE_MODAL:
      return { 
        ...state,
        opened: !state.opened
      };
    default:
      return state;
  }
}
