<template>
  <div class="feedBackground">
    <v-container
      class="mb-6 "
    >
      <v-row
        no-gutters
        style="height: 100%;"
      >
        <v-col
        
          v-for="p in photos"
          :key="p.id"
          sm="4"
          >

          <v-card
    class="mx-auto mb-5 albumcard"
    max-width="344"
    outlined
    elevation="24"
    shaped
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="overline mb-4 text-center">
          <h4>{{p.title}}</h4>
        </div>
      </v-list-item-content>
    </v-list-item>
    <div class="photo">
        <img :src="p.thumbnailUrl" alt="">
    </div>    
    <v-card-actions>
<a :href="p.url">
      <v-btn
        outlined
        rounded
        text
        color="purple"
        elevation="24"
        class="mx-12"
      >
      
        View Original
      
      </v-btn>
        </a>
    </v-card-actions>
  </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
    name: 'Album',
   components: {
     
  }, 
  props:
    ['id','AId'],

  data(){
    
    return{  
      photos: [],
      
  }
  },
  mounted: function(){
    var U = `https://jsonplaceholder.typicode.com/photos?albumId=${this.AId}`
    fetch(U ,{
      method : 'get'
    })
  .then(response => response.json())
  .then((jsonData) => {
    this.photos = jsonData
    console.log(this.photos)
  })
  }
}
</script>

<style>
.feedBackground{
    background-image: url(../assets/logo.jpg);
    background-attachment:fixed ;
    background-size: cover;
    width: 100%;
    height: 100%;
}
.albumcard{
    margin-bottom: 5px;
}
.photo{
    margin-left: 3px;
}
</style>