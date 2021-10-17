import axios from "axios";
export default ({
  namespaced: true,
  state: {
    token: null,
    user: null,
    errors: null,
    farm: null,
  },
  getters: {
    authenticated(state) {
      if (state.token != null && state.user != null) {
        return true;
      }
      else {
        return false;
      }
    },
    user(state) {
      return state.user;
    },
    farm(state){
      return state.farm;
    }
  },
  mutations: {
    SET_TOKEN(state, token) {
      state.token = token;
      localStorage.setItem('token', token);
    },
    SET_USER(state, user) {
      state.user = user;
    },

    SET_ERROR(state, errors) {
      state.errors = errors;
    },
    SET_FARM(state, farm) {
      state.farm = farm;
    }
  },
  actions: {
    async signIn({ dispatch }, credentials) {
      console.log(credentials);

      const response = await axios.post("http://127.0.0.1:8000/auth/login/", credentials);

      if (response.status == 200) {
        return dispatch("get_user", response.data.key);
      }
      else {
        dispatch("createError", response.data);

      }
    },

    async createError({ commit }, errors) {
      commit("SET_ERROR", errors);

    },
    async get_user({ commit }, token) {
      let config = {
        headers: {
          "Authorization": `Token ${token}`,
        }
      }
      const data = await axios.get("http://127.0.0.1:8000/auth/user/", config);
      
      commit("SET_TOKEN", token);
      commit("SET_USER", data.data);

      if (data.data.usertype === 'F') {
        const response = await axios.get("http://127.0.0.1:8000/farmers/farm/myfarm/", config);
        if (response.status == 200) {
          commit("SET_FARM", response.data);
        }

      }
    }

  },
})
