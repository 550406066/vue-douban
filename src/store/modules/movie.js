import { Get,POST} from "../../util/axiosMethods";
const state={
    hotMovies:[],
    newMovies:[],
    topMovies:[],

}
const mutations={
    getMovie(state,moviesTag){
        switch(moviesTag.tag){
            case 'hotMovies':
            state.hotMovies=moviesTag.res
            break;
            case 'newMovies':
            state.newMovies=moviesTag.res
            break;
            case 'topMovies':
            state.topMovies=moviesTag.res
            break;
        }
    }
}
const actions={
    getMovie({commit},parameter){
        Get("/movie/in_theaters",parameter).then(res=>{
            if(res.status===200){
                commit({
                    type: 'getMovie',
                    tag: 'hotMovies',
                    res: res.data.subjects
                  })
            }else{
                console.log("res.code!==200")
            }
        })
        Get("/movie/coming_soon",parameter).then(res=>{
            if(res.status===200){
                commit({
                    type: 'getMovie',
                    tag: 'newMovies',
                    res: res.data.subjects
                  })
            }else{
                console.log("res.code!==200")
            }
        })
        Get("/movie/top250",parameter).then(res=>{
            if(res.status===200){
                commit({
                    type: 'getMovie',
                    tag: 'topMovies',
                    res: res.data.subjects
                  })
            }else{
                console.log("res.code!==200")
            }
        })
    }
}
export default{
    state,
    mutations,
    actions,
}