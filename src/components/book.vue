<template>
    <div>
      <top-nav></top-nav>
      <module :moduleInfo="bookInfo" type="book"></module>  

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
      id:this.$route.params.id||"",

    };
  },
  mounted:function(){
       this.$store.dispatch("getBook",this.id);
  },
  computed: mapState({
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