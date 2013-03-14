$(document).ready(function(){
 
  // Show/Hide delete_sticker icon
  $('.sticker').each(function(){
    $(this).mouseenter(function(){
      $(this).find('.icon_delete').css('display','block');
    });
  });
 
  $('.sticker').each(function(){
    $(this).mouseleave(function(){
      $(this).find('.icon_delete').css('display','none');
    });
  });
 
 
  // drag the stickers
 
  /* configurations of block to_do to cach the stickers */
 
  var stop_message = function (ui) {
      alert("Now I'm in " + $(ui.item).parent().attr('class').split(" ")[0]);
  };
 
  $(".block_to_do").sortable({
    revert: 10,
    items: ".sticker",
    cancel: ".prototype",
    connectWith: ["div.block_in_progress", "div.block_done"],
    stop: function (event, ui) {
      stop_message(ui);
    }
  });
 
  /* configurations of block in progress to cach the stickers */
  $(".block_in_progress").sortable({
    revert: 10,
    connectWith: ["div.block_to_do", "div.block_done"],
    stop: function (event, ui) {
      stop_message(ui);
    }
  });
 
  /* configurations of block done to cach the stickers */
  $(".block_done").sortable({
    revert: 10,
    connectWith: ["div.block_to_do", "div.block_in_progress"],
    stop: function (event, ui) {
      stop_message(ui);
    }
  });
 
  /* ending tag*/     
});