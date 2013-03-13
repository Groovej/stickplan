$(document).ready(function(){
	
	// Show/Hide delete_sticker icon
	$('.sticker').each(function(){
	    $(this).mouseenter(function(){
            $(this).find('.icon_delete').css('display','block');
        })
	})
	
	
	$('.sticker').each(function(){
	    $(this).mouseleave(function(){
		  $(this).find('.icon_delete').css('display','none');
		  })
	})
	

	
	// drag the stickers
   
	
	/* configurations of block to_do to cach the stickers */
    $(".block_to_do").sortable({
        revert: 10,
        connectWith: ["div.block_in_progress", "div.block_done"],
      })

     
  $( ".block_to_do" ).droppable({
      disable: true,
      accept: "div[class*='color']",
      drop: function( event, ui ) {
        $( this )
      }        
    });
    
    /* configurations of block in progress to cach the stickers */
   $(".block_in_progress").sortable({
       revert: 10,
       connectWith: ["div.block_to_do", "div.block_done"] 
   })
   
   $( ".block_in_progress" ).droppable({
      disable: true,
      accept: "div[class*='color']",
      drop: function( event, ui ) {
        $( this )
          }        
    });
    
     /* configurations of block done to cach the stickers */
   $(".block_done").sortable({
       revert: 10,
       connectWith: ["div.block_to_do", "div.block_in_progress"]
   })
   
   $( ".block_done" ).droppable({
      disable: true,
      accept: "div[class*='color']",
      drop: function( event, ui ) {
        $( this )
          }        
    });
 
    
     $('.sticker').draggable({
         disabled: false
     })
     
     $( "div[class~='color']" ).draggable({ 
        disabled: true,
        containment: "#main_container",
        scroll: false,
        cursor: "move",
        cursorAt: { top: 120, left: 80 }, 
        distance: 20,
        helper: 'original',
        
    });
 
 
 /* ending tag*/     
 })
