module.exports = async function() {
  return await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "get",
  }).then((response) => response.json());
};
