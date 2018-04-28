<template>
    <div v-if="moduleInfo">
        <div class="title">{{moduleInfo.title}}</div>
     
        <div class="moudle-info">
            <grade v-if="moduleInfo.rating" :rating="moduleInfo.rating"></grade>
            {{moduleInfo.year}}/
            <span v-for="item in moduleInfo.genres" :key="item.id"><span>{{item}}/</span></span> 
            <span v-for="item in moduleInfo.casts" :key="item.id"><span>{{item.name}}</span></span>    
            {{moduleInfo.countries[0]}}  
        </div>
        <div class="moudle-box-img">
            <img :src="moduleInfo.images.small" class="moudle-img" alt="">
        </div>
        <div>
           <p> {{moduleInfo.title}}的简介</p>
           <p>{{moduleInfo.summary}}</p>
        </div>
    </div>
</template>

<script>
import grade from "../util/grade.vue";
export default {
  props: ['moduleInfo'],
  components: {
    grade
  },

};
</script>

<style scoped>
.title{
    margin-top: 1rem
}
.moudle-info{
    width: 50%;
    float: left
}
.moudle-box-img{
    width: 50%;
    float: left
}
.moudle-img{
    margin: 0 auto;
    height: 10rem;
}
</style>