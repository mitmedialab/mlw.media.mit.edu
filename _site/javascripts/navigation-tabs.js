$('#tabs').click(function() {
  $('#tab-down').toggle();
  $('#tab-region').toggle();
  $('#tab-up').toggle();
  $('#tab-border').toggle()
  if($('#tab-up').is(':visible')){
    $('#tabs').css("top", $("#tab-region").height()+40);
  }
  else{
    $('#tabs').css("top", "5px");
  }
});