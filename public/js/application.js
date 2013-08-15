$(document).ready(function(){
  $('#get_color').click(function() {
    var colorRequest = $.ajax({
      type: 'post',
      url: '/color'
    });

    colorRequest.done(function(response) {
      $('#color_me li:nth-child(' + response.cell + ')').css("background-color", response.color);
    });
  });
});