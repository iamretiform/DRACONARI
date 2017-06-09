var SC = require('soundcloud');

SC.initialize({
  client_id: 'I6pz7m0JYMYB6Qq694eyPjWAvj3rwn0q',
  redirect_uri: ''
});

SC.get("/tracks", function(response) {
  for (var i = 0; i < response.length; i++) {
    $("ul").append("<li>" + response[i].title + "</li>");
  }
});