import { 
	SET_TUTORIAL_CHAPTER,
	SET_TUTORIAL_SLIDE
} from 'redux/constants/action-types';

const initialState = {
  chapter: 0,
  slide: 0
};

export default function tutorial(state = initialState, action) {
  switch (action.type) {
    case SET_TUTORIAL_CHAPTER:
      return { 
      	...state,
        chapter: action.newState 
    	};
    case SET_TUTORIAL_SLIDE:
      return { 
      	...state,
        slide: action.newState 
    	};
    default:
      return state;
  }
}
