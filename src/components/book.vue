<template>
    <div>
      <top-nav></top-nav>
      <module :moduleInfo="bookInfo"></module>  

    </div>
</template>

<script>
import topNav from './topNav'
import module from './module'
import {Get} from "../util/axiosMethods"
import { mapState } from "vuex";
export default {
  data() {
    return {
      movie: "电影",
      id:this.$route.params.id||"",
      // movieInfo:this.$store.state.search.movieInfo
    };
  },
  mounted:function(){
       this.$store.dispatch("getBook",this.id);
  },
  computed: mapState({
    // 箭头函数可使代码更简练
    bookInfo: state => state.search.bookInfo,

    // 传字符串参数 'count' 等同于 `state => state.count`
  }),
  components: {
    topNav,module
  },

};
</script>

<style scoped>

</style>