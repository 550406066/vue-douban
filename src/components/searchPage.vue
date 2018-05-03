<template>
    <div>
           <top-nav></top-nav>
        <div class="module-info">
            <div class="title">影视 </div>
         
          <div class="noWord" v-if="searchMovies.subjects.length==0">
            没有搜索结果...
          </div>
            <div v-else v-for="item in searchMovies.subjects" :key="item.id">
                <router-link :to="'/movie/' + item.id" >
                 <div class="module">
                    <img :src="item.images.small" class="search-img" referrerpolicy="no-referrer">   
                    <div class="module-item">
                    <div  class="movies-item-title">{{item.title}}</div>  
                    <grade v-if="item.rating" :rating="item.rating"></grade>
                    </div>
                 </div>
                </router-link>
            </div>
        </div>
          <div class="module-info">
            <div class="title">图书 </div>
               <div class="noWord" v-if="searchBook.books.length===0">
            没有搜索结果...
          </div>
            <div v-else v-for="item in searchBook.books" :key="item.id">
                   <router-link :to="'/book/' + item.id" >
               <div class="module">
                    <img :src="item.images.small" class="search-img" referrerpolicy="no-referrer">   
                    <div class="module-item">
                    <div  class="movies-item-title">{{item.title}}</div>  
                    <grade v-if="item.rating" :rating="item.rating"></grade>
                    </div>
                 </div>
                   </router-link>
            </div>
        </div>

    </div>
</template>

<script>
import topNav from "./topNav";
import { mapState } from "vuex";
import grade from "../util/grade";
export default {
  data() {
    return {
      count: 3,
      q: this.$route.params.q
    };
  },
  mounted: function() {
    console.log(this.searchBook);
    if (this.searchBook.length === 0) {
      this.$store.dispatch("getSearchInfo", {
        q: this.$route.params.q,
        count: this.count
      });
    }
  },
  components: {
    grade,
    topNav
  },
  computed: {
    ...mapState({
      searchBook: state => state.search.searchBook,
      searchMovies: state => state.search.searchMovies
    })
  }
};
</script>

<style scoped>
.title {
  padding: 0.5rem;
  font-size: 1.2rem;
}
.movies-item-title {
  color: #999999;
}
.module {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  margin: 0.5rem;
}
.module-item {
  margin-left: 0.5rem;
  flex: 1;
}
.module-info {
  margin-left: 0.5rem;
}
.search-img {
  width: 5rem;
  height: 5rem;
}
.noWord{
   margin-left: 0.5rem;
  color: #999999
}
</style>