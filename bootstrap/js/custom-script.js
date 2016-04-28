$( document ).ready(function() {
  console.log('DOM chargé');
  
  $(".progress-bar").each(function() {
    $(this).animate(
      {width:$(this).attr('aria-valuenow')+"%"}, 600);
  });
});