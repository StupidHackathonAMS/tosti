var links = document.querySelectorAll('a');
// console.log(links);

links.forEach(function(link) {
  if (Math.random() > 0.8) {
    link.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  }
});


links.forEach(function(link) {
  console.log(link.href);
});
