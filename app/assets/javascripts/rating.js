$(document).on("turbolinks:load", function(){
  $('.star-rating').raty({
    path: '/assets/',
    readOnly: true,
    score: function() {
      return $(this).attr('data-score');
    }
  });

  $('#star-rating').raty({
    path: '/assets',
    scoreName: 'review[rating]'
  });
});
