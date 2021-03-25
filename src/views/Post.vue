<template>
<div class="postBackground">
  <!-- comments section -->

  <v-container >
    <v-row no-gutters>
      <v-col
        v-for="c in comments"
        :key="c.id"
        cols="12"
        sm="12"
      >
        <v-card
          class="pa-5 comment"
          outlined
          shaped
          elevation="24"
          color="grey"
        >
        
          <div class="title">
            <h5>{{c.name}}</h5>
          </div>
          <hr>
          <div class="body">
            <p>{{c.body}}</p>
          </div>
        
        </v-card>
      </v-col>
    </v-row>
  </v-container>
  </div>
</template>

<script>
export default {
    name: 'Posts',
   components: {
     
  }, 
  props:
    ['id'],

  data(){
    
    return{  
      comments: [],
      
  }
  },
  mounted: function(){
    var U = `https://jsonplaceholder.typicode.com/comments?postId=${this.id}`
    fetch(U ,{
      method : 'get'
    })
  .then(response => response.json())
  .then((jsonData) => {
    this.comments = jsonData
    console.log(this.comments)
  })
  }
}
</script>

<style scoped>
.postBackground{
  background-image: url(../assets/logo.jpg);
    background-attachment:fixed ;
    background-size: cover;
    width: 100%;
    height: 100%;
}

.comment{
  margin-bottom: 1.5rem;
}

</style>