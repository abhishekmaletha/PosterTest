<template>
  <div>
      <h3>add post</h3>
      <div class="add">
        <hr>
        <form @submit="onSubmit">
          <input type="text" v-model="userId" placeholder="Add Post...">
          <input type="text" v-model="title" placeholder="Add Title...">
          <input type="text" v-model="body" placeholder="Add body...">
          <input type="submit" value="Submit">
          
          
        </form>
      </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
name: "AddPost",
data(){
  return{
    title: '',
    userId: '',
    body: ''
  }
},
methods:{
  ...mapActions(['addPost']),
  onSubmit(e) {
    e.preventDefault();
    this.addPost(this.userId,this.title,this.body);
  }
}
}
</script>

<style>
input[type="text"]{
  margin-left:2px ;
  padding: 10px;
  border: 1px solid rgb(220, 228, 148);
}
input[type="submit"]{
  margin-left:2px ;
  padding: 10px;
  background-color: greenyellow;
  border: 1px solid rgb(6, 119, 6);
  cursor: pointer;

}
</style>