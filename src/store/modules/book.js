import { Get,POST} from "../../util/axiosMethods";
const state={
    novel: [],
  reality: [],
  travel: [],
}

const mutations={
    getBooks(state,bookTag){
        switch(bookTag.tag){
            case 'novel':
            state.novel=bookTag.res
            break;
            case 'reality':
            state.reality=bookTag.res
            break;
            case 'travel':
            state.travel=bookTag.res
            break;
        }
    }
}
const actions={
    getBooks({commit},parameter){
        Get("/book/search?q=虚构类",parameter).then(res=>{
            if(res.status===200){
                commit({
                    type: 'getBooks',
                    tag: 'novel',
                    res: res.data.books
                  })
            }else{
                console.log("res.code!==200")
            }
        })
        Get("/book/search?q=非虚构类",parameter).then(res=>{
            if(res.status===200){
                commit({
                    type: 'getBooks',
                    tag: 'reality',
                    res: res.data.books
                  })
            }else{
                console.log("res.code!==200")
            }
        })
        Get("/book/search?q=旅行",parameter).then(res=>{
            if(res.status===200){
                commit({
                    type: 'getBooks',
                    tag: 'travel',
                    res: res.data.books
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