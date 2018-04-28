import { Get,POST,GetInfo} from "../../util/axiosMethods";
const state = {
  movieInfo: {},
  bookInfo: {},
}
const mutations = {
  getSearch: function (state, moviesTag) {
        state.movieInfo = moviesTag 
  },
  getBook: function (state, moviesTag) {
    state.bookInfo = moviesTag 
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
    GetInfo("/book/subject/", parameter).then(res => {
      if (res.status === 200) {
        commit('getBook',res.data)
      } else {
        console.log("error")
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
