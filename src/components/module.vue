<template>
    <div v-if="this.type=='movie'">
        <div class="title">{{moduleInfo.title}}</div>
     
        <div class="moudle-info">
            <grade v-if="moduleInfo.rating" :rating="moduleInfo.rating"></grade>
            {{moduleInfo.year}}/
            <span v-for="item in moduleInfo.genres" :key="item.id"><span>{{item}}/</span></span> 
            <span v-for="item in moduleInfo.casts" :key="item.id"><span>{{item.name}}/</span></span>    
            {{moduleInfo.countries[0]}}  
        </div>
        <div class="moudle-box-img">
            <img :src="moduleInfo.images.small" class="moudle-img" alt="">
        </div>
        
           <p class="titleInfo"> {{moduleInfo.title}}的简介</p>
           <div class="abstract-class">
            <div v-if="isAllAbstract">
           <p>
            {{abstract}}
            <van-icon name="add-o" @click="showAllAbstract"/>
            </p>
        </div>
        <div v-else>
           <p>
         {{allAbstract}}
            <van-icon name="close" @click="showAllAbstract"/>
            </p>
            </div>
        </div>
    </div>
        <div v-else>
            <div class="title">{{moduleInfo.title}}</div>
           <div class="moudle-info">
               <div class="moudle-left">
            <grade v-if="moduleInfo.rating" :rating="moduleInfo.rating"></grade>
            {{moduleInfo.author[0]}}/{{moduleInfo.binding}}/{{moduleInfo.publisher}}/{{moduleInfo.ebook_price}}
            </div>
        </div>

        <div class="moudle-box-img">
            <img :src="moduleInfo.images.small" class="moudle-img" alt="">
        </div>
    
        <p class="titleInfo"> {{moduleInfo.title}}的简介</p>
        <div class="abstract-class">
        <div v-if="isAllAbstract">
            <p>
                {{abstract}}
                <van-icon name="add-o" @click="showAllAbstract"/>
            </p>
        </div>
        <div v-else>
            <p>{{allAbstract}}<van-icon name="close" @click="showAllAbstract"/></p>
        </div>
        </div>
        </div>
</template>

<script>
import grade from "../util/grade.vue";
export default {
  data() {
    return {
      isAllAbstract: true
    };
  },
  props: ["moduleInfo", "type"],
  components: {
    grade
  },

  computed: {
    abstract: function() {
      if (this.moduleInfo.summary.length > 100) {
        return this.moduleInfo.summary.slice(0, 100) + "...";
      } else {
        return this.moduleInfo.summary;
      }
    },
    allAbstract: function() {
      return this.moduleInfo.summary;
    }
  },
  methods: {
    showAllAbstract() {
      this.isAllAbstract = !this.isAllAbstract;
    }
  }
};
</script>

<style scoped>
.title {
  margin-top: 1rem;
  margin-left: 0.5rem;
}
.titleInfo {
margin-left: 0.5rem;
  color: #aaaaaa;
}
.moudle-info {
  width: 50%;
  float: left;
}
.moudle-box-img {
  text-align: center;
  width: 50%;
  float: left;
}
.moudle-left {
  margin: 0.5rem;
}
.moudle-img {
  margin: 0 auto;
  height: 10rem;
}
.abstract-class{
    font-size: .8rem;
    padding:0 0.5rem;
    text-align: justify
}
</style>