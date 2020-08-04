import {Module} from 'vuex';

export interface IUiState {
  sideNavigationOpened: boolean;
}

// getters
export const SIDE_NAVIGATION_OPENED = 'ui/SIDE_NAVIGATION_OPENED';

// mutations
export const TOGGLE_SIDE_NAVIGATION = 'ui/TOGGLE_SIDE_NAVIGATION';

const ui: Module<IUiState, {}> ={
  state: {
    sideNavigationOpened: false
  },
  getters: {
    [SIDE_NAVIGATION_OPENED]: state => state.sideNavigationOpened
  },
  mutations: {
    [TOGGLE_SIDE_NAVIGATION](state, payload: boolean) {
      state.sideNavigationOpened = payload;
    }
  }
};

export default ui;
