<template>
  <div class="search-bar">
<van-row>
  <van-col span="4" class="top-nav-option" @click.native="goMain">豆瓣</van-col>
  <van-col span="12" class="search-option"><van-search placeholder="请输入搜索名称" class="top-nav-search" v-model="searchValue"   @search="onSearch"
    @cancel="onCancel" /></van-col>
  <van-col span="4"  class="top-nav-option" @click.native="goMain">电影</van-col>
  <van-col span="4"  class="top-nav-option" @click.native="goMain">图书</van-col>

</van-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchValue: ""||localStorage.searchValue,
      count: 5
    };
  },
  methods: {
    onSearch() {
      localStorage.searchValue=this.searchValue
      this.$store.dispatch("getSearchInfo", {
        q: this.searchValue,
        count: this.count
      });
      this.$router.push({ name: "search", params: { q: this.searchValue } });
 
    },
    onCancel() {
        localStorage.searchValue=this.searchValue
   
    },
    goMain() {
      if (this.$route.path !== "/") {
        this.$router.push({ path: "/" });
      }
    }
  }
};
</script>

 <style scoped >
.search-bar {
  height: 3rem;
  color: #00b600;
  line-height: 3rem;
  font-size: 1rem;
  border-bottom: 1px solid #cccccc;
}
.search-option {
  margin-top: 0.4rem;
}
.top-nav-search {
  background-color: #ffffff !important;
}
.top-nav-option {
  text-align: center;
}
</style>