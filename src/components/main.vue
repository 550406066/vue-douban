<template>
    <div>
        <topNav/>

<van-row class="top-tip">
  <van-col span="8">影院热映</van-col>
  <van-col span="4" offset="12">更多</van-col>
</van-row>

    </div>
</template>

<script>
import topNav from "./topNav.vue";
import { Get } from "../util/axiosMethods";
export default {
  mounted: function() {
    Get("/movie/in_theaters").then(res => {
      console.log(res);
    });
  },
  components: {
    topNav
  }
};
</script>

<style scoped>
.top-tip {
  padding: 0.5rem;
}
</style>