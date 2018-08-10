import { 
	SET_TUTORIAL_CHAPTER,
	SET_TUTORIAL_SLIDE
} from 'redux/constants/action-types';

export function setTutorialChapter(chapter) {
  return {
    type: SET_TUTORIAL_CHAPTER,
    newState: chapter
  };
}

export function setTutorialSlide(slide) {
  return {
    type: SET_TUTORIAL_SLIDE,
    newState: slide
  };
}

export default { 
	setTutorialChapter,
	setTutorialSlide
};
