$(document).ready(function(){
	
	// Show/Hide delete_sticker icon
	$('.sticker').mouseenter(function(){
		$('.icon_delete').css('display','block');
	})
	$('.sticker').mouseleave(function(){
		$('.icon_delete').css('display','none');
	})
	
	// drag the stickers
	$( ".sticker" ).draggable({ 
        disabled: true,
        containment: "#main_container",
	    scroll: false, cursor: "move",
	    cursorAt: { top: 120, left: 80 }, 
	    distance: 20,
	    connectToSortable: ".block_to_do",
        helper: 'original'	
	});
	
	$(".sticker" ).draggable({ 
	      cancel: "p#text" 
	    })
      
    
    $(".block_to_do").sortable({
        revert: true
        })

     
  $( ".block_to_do" ).droppable({
      accept: ".sticker",
      drop: function( event, ui ) {
        $( this )
          }        
    });
    
   
    
   
    
     
 })
