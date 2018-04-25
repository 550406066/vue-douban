<template>
  <div class="search-bar">
<van-row>
  <van-col span="4" class="top-nav-option" >豆瓣</van-col>
  <van-col span="12"><van-search placeholder="请输入商品名称" class="top-nav-search" v-model="searchValue"   @search="onSearch"
    @cancel="onCancel" /></van-col>
  <van-col span="4"  class="top-nav-option" @click.native="goMovie">电影</van-col>
  <van-col span="4"  class="top-nav-option" @click.native="goBook">图书</van-col>

</van-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchValue: ""
    };
  },
  methods: {
    onSearch() {
      console.log(this.searchValue);
    },
    onCancel() {
      console.log(this.searchValue);
    },
    goMovie() {
      console.log("Movie");
      this.$router.push({ path: "Movie" });
    },
    goBook() {
      console.log("book");
      this.$router.push({ path: "Book" });
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
  border-bottom: 1px solid #cccccc
}
.top-nav-search {
  background-color: #ffffff !important;
}
.top-nav-option {
  text-align: center;
}
</style>