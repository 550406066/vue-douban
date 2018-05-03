import { Get,POST,GetInfo} from "../../util/axiosMethods";
const state = {
  movieInfo: {},
  bookInfo: {},
  searchBook:[],
  searchMovies:[],
}
const mutations = {
  getSearch: function (state, moviesTag) {
        state.movieInfo = moviesTag 
  },
  getBook: function (state, moviesTag) {
    state.bookInfo = moviesTag 
  },
  getSearchInfo:function(state, moviesTag){
    switch(moviesTag.tag){
      case "searchMovies":
      state.searchMovies=moviesTag.res
      break;
      case "searchBook":
      state.searchBook=moviesTag.res
      break;
    }
  }
}
const actions = {
  getSearch({commit}, parameter) {
    GetInfo("/movie/subject/", parameter).then(res => {
      if (res.status === 200) {
        commit('getSearch',res.data)
      } else {
        console.log("error")
      }
    })
  },
  getBook({commit}, parameter) {
    GetInfo("/book/", parameter).then(res => {
      if (res.status === 200) {
        commit('getBook',res.data)
      } else {
        console.log("error")
      }
    })
  },
  getSearchInfo({commit}, parameter) {
    Get("/movie/search",parameter).then(res=>{
      if(res.status===200){
          commit({
              type: 'getSearchInfo',
              tag: 'searchMovies',
              res: res.data
            })
      }else{
          console.log("res.code!==200")
      }
  })
  Get("/book/search",parameter).then(res=>{
      if(res.status===200){
          commit({
              type: 'getSearchInfo',
              tag: 'searchBook',
              res: res.data
            })
      }else{
          console.log("res.code!==200")
      }
  })
  }
}
export default {
  state,
  mutations,
  actions,
}

//     Get("/movie/subject/"+this.id).then(res=>{
// console.log(res)
//         })
