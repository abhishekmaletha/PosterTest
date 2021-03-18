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
        
          v-for="p in feed"
          :key="p.id"
          sm="4"
          >

          <v-card
            class="pa-2  singlePost cyan "
            outlined
            shaped
          >
          <div>
            
          <section class="postTitle">
            <div>
              <router-link :to="{ name:'Post', params: { id: p.id}}">
          <h4>{{p.title}}</h4>
              </router-link>
            </div>
          </section>
          
          <section class="postBody">
          <div>
          <p >
            {{p.body}}
          </p>
          </div>
          </section>
            
          </div>
          </v-card>

        </v-col>
      </v-row>
    </v-container>
  </div>
</template>


<script>
import feed from '@/data/feed.js'
  export default {
  name: 'Feed',
  data: function() {
    return {
      feed
    }
  }
  }
</script>


<style scoped>
.feedBackground{
    background-image: url(../assets/logo.jpg);
    background-attachment:fixed ;
    background-size: cover;
    width: 100%;
    height: 100%;
}
.singlePost{
  margin: 10px;
  clear: left;
}
.postTitle{
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