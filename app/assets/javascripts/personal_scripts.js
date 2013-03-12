$(document).ready(function(){
	
	// Show/Hide delete_sticker icon
	$('.sticker').mouseenter(function(){
		$('.icon_delete').css('display','block');
	})
	$('.sticker').mouseleave(function(){
		$('.icon_delete').css('display','none');
	})
	
	// drag the stickers
	$( ".sticker" ).draggable({ containment: "#main_container", scroll: false, cursor: "move", cursorAt: { top: 120, left: 80 }, distance: 20 });
      
    
    $(".block_to_do").sortable({
        revert: true
        })
   
   $( ".sticker" ).draggable({
      connectToSortable: ".block_to_do",
      snap: true,
      snapMode: "both"
      });
      
    $(".block_to_do").disableSelection();
     
    
     
 })
