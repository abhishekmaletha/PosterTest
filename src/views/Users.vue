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
        
          v-for="p in users"
          :key="p.id"
          sm="4"
          >

          <v-card
    class="mx-auto mb-5"
    max-width="344"
    outlined
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="overline mb-4">
          {{p.username}}
        </div>
        <v-list-item-title class="headline mb-1">
          {{p.name}}
        </v-list-item-title>
        <v-list-item-subtitle>{{p.company.bs}}</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar
        
        size="80"
        color="blue"
        shaped
      >{{p.name[0]}}</v-list-item-avatar>
    </v-list-item>

    <v-card-actions>
        <router-link :to="{ name:'Albums', params: { id: p.id}}">
      <v-btn
        outlined
        rounded
        text
        color="purple"
      >
      
        Albums
      
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
    name: 'Users',
    
   components: {
    
  },
  
  data: function() {
    return {

      users : []
    }
  },
  methods:{
    details(){

    }
  },

  mounted: function(){
    fetch('https://jsonplaceholder.typicode.com/users',{
      method : 'get'
    })
  .then(response => response.json())
  .then((jsonData) => {
    this.users = jsonData
  })
  }
};
</script>


<style scoped>
.feedBackground{
    background-image: url(../assets/logo.jpg);
    background-attachment:fixed ;
    background-size: cover;
    width: 100%;
    height: 100%;
}
.singleUser{
  margin: 10px;
  clear: left;
}
.userName{
  margin-bottom: 0.5rem;
  padding-left: 0.5rem;
  background-color: rgba(218, 192, 228, 0.397);
  color: #000000;
}
.postBody{
  padding: 0.25rem;
  background-color: rgba(247, 138, 138, 0.384);
}
.postTitle, .postBody{
border: black 1.5px solid;
}

</style>