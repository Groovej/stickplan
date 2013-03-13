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
	    scroll: false,
	    cursor: "move",
	    cursorAt: { top: 120, left: 80 }, 
	    distance: 20,
	    helper: 'original'	
	});
	
	/* configurations of block to_do to cach the stickers */
    $(".block_to_do").sortable({
        revert: true,
        connectWith: ["div.block_in_progress", "div.block_done"]
    })

     
  $( ".block_to_do" ).droppable({
      disable: true,
      accept: ".sticker",
      drop: function( event, ui ) {
        $( this )
          }        
    });
    
    /* configurations of block in progress to cach the stickers */
   $(".block_in_progress").sortable({
       revert: true,
       connectWith: ["div.block_to_do", "div.block_done"] 
   })
   
   $( ".block_in_progress" ).droppable({
      disable: true,
      accept: ".sticker",
      drop: function( event, ui ) {
        $( this )
          }        
    });
    
     /* configurations of block done to cach the stickers */
   $(".block_done").sortable({
       revert: true,
       connectWith: ["div.block_to_do", "div.block_in_progress"]
   })
   
   $( ".block_done" ).droppable({
      disable: true,
      accept: ".sticker",
      drop: function( event, ui ) {
        $( this )
          }        
    });
   
    
   
    
     
 })
