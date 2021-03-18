  export default {

  data: function() {
    return {

      feed : []
    }
  },

  mounted: function(){
    fetch('https://jsonplaceholder.typicode.com/posts',{
      method : 'get'
    })
  .then(response => response.json())
  .then((jsonData) => {
    this.feed = jsonData
  })
  }
}
