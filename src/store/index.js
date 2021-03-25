import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posts: []
  },
  getters:{
    allPosts: state => state.posts
  },
  actions: {
    async fetchPosts({ commit }) {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "get",
      }).then((response) => response.json());

      commit('setPosts',response);
    },
    async addPost({commit},userID,title,body) {
        const response =await post('https://jsonplaceholder.typicode.com/posts',{userID,title,body,completed:false,method:"post"});
        commit('newPosts',response);
    }
  },
  mutations: {
    setPosts: (state, posts) => (state.posts = posts),
    newPosts :(state,post) => (state.posts.unshift(post))
  },
  modules: {
  }
})
