<template>
    <div>
        <topNav/>
        <van-row class="top-tip">
          <van-col span="8">影院热映</van-col>
          <van-col span="4" offset="12"  class="moreMovies"><span @click="moreMovies('hotMovies')"> 更多</span></van-col>
        </van-row>
      <div class="movies-info">
      
            <div v-for="(item,index) in hotMovies" :key="index" class="movies-item" >
                <router-link :to="'movie/' + item.id" append>
                <img :src="item.images.small" v-lazy="item.images.small" class="movies-item-img">
              <p class="movies-item-title">{{item.title}}</p>
                <grade v-if="item.rating" :rating="item.rating" class="movies-item-grade"></grade>
                </router-link>
            </div>
        
          </div>
        <van-row class="top-tip">
          <van-col span="8">新片速递</van-col>
          <van-col span="4" offset="12"  class="moreMovies"><span @click="moreMovies('newMovies')"> 更多</span></van-col>
        </van-row>
          <div class="movies-info">
            <div v-for="(item,index) in newMovies" :key="index" class="movies-item" >
                <router-link :to="'movie/' + item.id" append>
                <img :src="item.images.small" v-lazy="item.images.small" class="movies-item-img">
              <p class="movies-item-title">{{item.title}}</p>
                <grade v-if="item.rating" :rating="item.rating" class="movies-item-grade"></grade>
                </router-link>
            </div>
      
          </div>
          <van-row class="top-tip">
          <van-col span="8">评分排行榜</van-col>
          <van-col span="4" offset="12"  class="moreMovies"><span @click="moreMovies('topMovies')"> 更多</span></van-col>
        </van-row>
          <div class="movies-info">
         
            <div v-for="(item,index) in topMovies" :key="index" class="movies-item" >
                <router-link :to="'movie/' + item.id" append>
                <img :src="item.images.small" v-lazy="item.images.small" class="movies-item-img">
              <p class="movies-item-title">{{item.title}}</p>
                <grade v-if="item.rating" :rating="item.rating" class="movies-item-grade"></grade>
                </router-link>
            </div>
      
          </div>

          <!-- 图书部分 -->
          <van-row class="top-tip">
          <van-col span="8">虚幻类</van-col>
          <van-col span="4" offset="12"  class="moreMovies"><span @click="morebooks('novel')"> 更多</span></van-col>
        </van-row>
          <div class="movies-info">
            <div v-for="(item,index) in novel" :key="index" class="movies-item" >
                <router-link :to="'book/' + item.id" append>
                <img :src="item.images.small" class="movies-item-img" referrerpolicy="no-referrer">
              <p class="movies-item-title">{{item.title}}</p>
                <grade v-if="item.rating" :rating="item.rating" class="movies-item-grade"></grade>
                </router-link>
            </div>
          </div>
       
          <van-row class="top-tip">
          <van-col span="8">非虚幻类</van-col>
          <van-col span="4" offset="12"  class="moreMovies"><span @click="morebooks('reality')"> 更多</span></van-col>
        </van-row>
          <div class="movies-info">
            <div v-for="(item,index) in reality" :key="index" class="movies-item" >
                <router-link :to="'book/' + item.id" append>
                <img :src="item.images.small" class="movies-item-img" referrerpolicy="no-referrer">
              <p class="movies-item-title">{{item.title}}</p>
                <grade v-if="item.rating" :rating="item.rating" class="movies-item-grade"></grade>
                </router-link>
            </div>
          </div>


          <van-row class="top-tip">
          <van-col span="8">旅行·远方</van-col>
          <van-col span="4" offset="12"  class="moreMovies"><span @click="morebooks('travel')"> 更多</span></van-col>
        </van-row>
          <div class="movies-info">
            <div v-for="(item,index) in travel" :key="index" class="movies-item" >
                <router-link :to="'book/' + item.id" append>
                <img :src="item.images.small" class="movies-item-img" referrerpolicy="no-referrer">
              <p class="movies-item-title">{{item.title}}</p>
                <grade v-if="item.rating" :rating="item.rating" class="movies-item-grade"></grade>
                </router-link>
            </div>
          </div>
    </div>
</template>

<script>
import topNav from "./topNav.vue";
import grade from "../util/grade.vue";
import { mapState, mapActions } from "vuex";
export default {
  data: {
    hotMovies: [],
    newMovies: [],
    topMovies: [],
    novel: [],
    reality: [],
    travel: [],
    count:10
  },
  mounted: function() {
    if (this.hotMovies.length !== 0) {
    } else {
      this.$store.dispatch("getMovie", { count: this.count });
    }
    if (this.novel.length !== 0) {
    } else {
      this.$store.dispatch("getBooks", { count: this.count  });
    }
  },
  // computed:mapState(["test"]),
  computed: {
    ...mapState({
      hotMovies: state => state.movie.hotMovies,
      newMovies: state => state.movie.newMovies,
      topMovies: state => state.movie.topMovies,
      novel: state => state.book.novel,
      reality: state => state.book.reality,
      travel: state => state.book.travel
    })
  },
  methods: {
    moreMovies(type) {
      this.$router.push({ name: "more", params: { type: type, from: 1 } });
      console.log("点击更多");
    },
    morebooks(type) {
      this.$router.push({ name: "more", params: { type: type, from: 2 } });
      console.log("点击更多");
    }
  },
  // 'hotMovies','newMovies','topMovies'
  components: {
    topNav,
    grade
  }
};
</script>

<style scoped>
.moreMovies {
  font-size: 0.8rem;
  color: #00b600;
}
.top-tip {
  padding: 0.5rem;
}
.movies-info {
  word-wrap: normal;
  display: block;
  overflow-x: scroll;
  /* 内容会被裁剪，会以滚动条显示 */
  overflow-y: hidden; /* 超出内容不可见 */
  white-space: nowrap;
}
.movies-item {
  width: 8rem;
  display: inline-block;
  text-align: center;
  padding: 0.2rem;
}
.movies-item-img {
  margin: 0 auto;
  height: 10rem;
}
.movies-item-title {
  text-align: center;
  font-size: 0.8rem;
  margin: 0rem;
  color: #555;
}
.movies-item-grade {
  font-size: 0.5rem;
}
</style>