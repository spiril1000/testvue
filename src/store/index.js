import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
    state: {
        // Stores the toke and user object
        user: null,
        token: null,
        // baseadress: "https://localhost:44382/api/",
        baseadress: "https://selftesting.azurewebsites.net/api/" 
    },
    mutations: {
        setUser(state, user) {
            state.user = user;
        },
        setToken(state, token) {
            state.token = token;
        },
    },
    actions: {},
    getters: {},
},
);