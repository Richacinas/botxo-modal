import { 
	OPEN_MODAL,
	CLOSE_MODAL,
	TOGGLE_MODAL
} from 'redux/constants/action-types';

export function openModal() {
  return {
    type: OPEN_MODAL,
    newState: true
  };
}

export function closeModal() {
  return {
    type: CLOSE_MODAL,
    newState: false
  };
}

export function toggleModal() {
  return {
    type: TOGGLE_MODAL
  };
}

export default { 
	openModal,
	closeModal,
	toggleModal
};
