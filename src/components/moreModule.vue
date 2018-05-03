<template>
    <div>
      <div  v-if="fromType===1">
      <div v-for="item in listModule" :key="item.id">
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
        <div  v-else>
        <div v-for="item in listModule" :key="item.id">
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
import grade from "../util/grade.vue";
export default {
  data() {
    return {};
  },
  props: ["listModule", "fromType"],
  components: {
    grade
  },
  mounted: function() {
    console.log(this.fromType === 1);
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
</style>