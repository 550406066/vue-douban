<template>
    <div>
      <top-nav></top-nav>
        <van-list v-model="loading" :finished="finished" @load="onLoad" >
            <moremodule :listModule="list" :fromType="from"></moremodule>
        </van-list>

    </div>
</template>

<script>
import topNav from "./topNav";
import moremodule from "./moreModule";
export default {
  data() {
    return {
      more: "more",
      list: [],
      loading: false,
      finished: false,
      count: 10,
      page: 0,
      type: this.$route.params.type,
      from: this.$route.params.from
    };
  },
  mounted: function() {
    this.list = [];
  },
  methods: {
    onLoad() {
      setTimeout(() => {
              switch (this.type) {
          case "hotMovies":
            this.list.push(...this.$store.state.movie.hotMovies);
            break;
          case "newMovies":
            this.list.push(...this.$store.state.movie.newMovies);
            break;
          case "topMovies":
            this.list.push(...this.$store.state.movie.topMovies);
            break;
          case "novel":
            this.list.push(...this.$store.state.book.novel);
            break;
          case "reality":
            this.list.push(...this.$store.state.book.reality);
            break;
          case "travel":
            this.list.push(...this.$store.state.book.travel);
            break;
          default:
            break;
        }

        this.$nextTick(function() {
          console.log(" this.page"+ this.page)
          if (this.$route.params.from === 1) {
            this.$store.dispatch("getMovie", {
              start: (this.page -1)* this.count,
              count: this.count
            });
          } else {
              this.$store.dispatch("getBooks", {
              start: (this.page -1)* this.count,
              count: this.count
            });
          }
        });
        this.page += 1;
        this.loading = false;


  
        if (this.list.length >= 30) {
          this.finished = true;
        }
      }, 1500);
    }
    //   setTimeout(() => {

    //       this.$store.dispatch("getMovie", {
    //         start: (this.page -1) * this.count,
    //         count: this.count
    //       });

    //     this.page += 1;
    //     this.list.push(this.$store.state.movie.hotMovies);
    //     if (this.list.length >= 40) {
    //       this.finished = true;
    //     }
    //   }, 500);
  },
  components: {
    topNav,
    moremodule
  }
};
</script>

<style scoped>

</style>