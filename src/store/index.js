import { createStore } from 'vuex';

import coachesModule from './modules/coaches/index.js';
import requestsModule from './modules/requests/index.js';
import VuexPersistence from 'vuex-persist';

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
});

const store = createStore({
  modules: {
    coaches: coachesModule,
    requests: requestsModule,
  },
  state() {
    return {
      userId: 'c3',
    };
  },
  getters: {
    userId(state) {
      return state.userId;
    },
  },

  plugins: [vuexLocal.plugin],
});

export default store;
