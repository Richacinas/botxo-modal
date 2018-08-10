import { APP_LOAD } from 'redux/constants/action-types';

export function loadApp() {
  return {
    type: APP_LOAD,
  };
}

export default { loadApp };
