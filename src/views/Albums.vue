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
        
          v-for="p in albums"
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
          {{p.title}}
        </div>
      </v-list-item-content>

    </v-list-item>

    <v-card-actions>
        <router-link :to="{ name:'Photos', params: { AId: p.id}}">
      <v-btn
        outlined
        rounded
        text
        color="purple"
        elevation="24"
        class="mx-12"
      >
      
        View
      
      </v-btn>
        </router-link>
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
    ['id'],

  data(){
    
    return{  
      albums: [],
      
  }
  },
  mounted: function(){
    var U = `https://jsonplaceholder.typicode.com/albums?userId=${this.id}`
    fetch(U ,{
      method : 'get'
    })
  .then(response => response.json())
  .then((jsonData) => {
    this.albums = jsonData
    console.log(this.comments)
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
</style>