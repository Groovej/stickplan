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
 
 
  
 
  /* configurations of block to_do to cach the stickers */
 
  /*  var stop_message = function (ui) {
      alert("Now I'm in " + $(ui.item).parent().attr('class').split(" ")[0]);
  }; */

  $(".block_to_do").sortable({
    items: "> div:gt(0)", // prototype sticker can't be moved
    revert: 10,
    connectWith: [".block_in_progress", ".block_done"],
   /*  stop: function (event, ui) {
      stop_message(ui); 
    } */
    cursor: "move",
    cursorAt: { top: 120, left: 80 },
    containment: "#main_container",
     scroll: false,
  }).disableSelection();
  
   $( ".block_to_do" ).droppable({
       disable: false,
       accept: "div[class*='color']",
    })
 
  /* configurations of block in progress to cach the stickers */
  $(".block_in_progress").sortable({
    revert: 10,
    connectWith: [".block_to_do", ".block_done"],
     /* stop: function (event, ui) {
      stop_message(ui); 
    }  */
    cursor: "move",
    cursorAt: { top: 120, left: 80 },
    containment: "#main_container",
     scroll: false,
  }).disableSelection();
  
  $( ".block_in_progress" ).droppable({
       disable: false,
       accept: "div[class*='color']",
      
     });
      
  /* configurations of block done to cach the stickers */
  $(".block_done").sortable({
    revert: 10,
    connectWith: [".block_to_do", ".block_in_progress"],
    /*stop: function (event, ui) {
      stop_message(ui);
    } */
    cursor: "move",
    cursorAt: { top: 120, left: 80 },
    containment: "#main_container",
     scroll: false,
  }).disableSelection();
  
   $( ".block_done" ).droppable({
       disable: false,
       accept: "div[class*='color']",
     });
  
 
 /* Verification input of name scrum_board*/
    $('#name_of_board').focus(function(){
        this_val = $(this);
        minlength = this_val.attr('minlength');
       
            this_val.after('<span id="remember">' + minlength +' characters required</span>');
     }).keyup(function(){
        this_val = $(this);
        minlength = this_val.attr('minlength');
        if (this_val.val().length >= minlength){
            this_val.next().remove();
        }
    }).blur(function(){
        this_val = $(this);
        minlength = this_val.attr('minlength');
        this_val.next().remove();
    })

// add a new cticker to current board
  $("#not_draggable").click(function(){
      var arr = ["yellow", "blue", "green", "purple"];
      var rand = Math.floor( Math.random() * arr.length );
        //alert(arr[rand]);
      $('<div class = "sticker color ' + arr[rand] + '" > New sticker <a href="#" title="Delete this sticker" class="icon_delete"> <img src="http://localhost:3000/assets/delete-icon.png" alt="Delete sticker"/> </a> </div>').appendTo(".block_to_do");
      
      $('body').delegate(".sticker:not(#not_draggable)", "mouseenter", function(){
          $(this).find('.icon_delete').css('display','block');
      })
       
       $('body').delegate(".sticker:not(#not_draggable)", "mouseleave", function(){
          $(this).find('.icon_delete').css('display','none');
      })
      
      $('body').delegate(".icon_delete", "click", function(){
           $(this).parent().remove();
      })
      
      $('body').delegate(".sticker:not(#not_draggable)", "dblclick", function(){
            var variable1 = $(this).text();
            var variable = variable1.trim();
                $(this).append('<textarea style="resize: none; overflow: hidden;" autofocus cols="17" rows="4" maxlength="100" scrolling="off">' + variable + ' </textarea>');
             // alert(variable);
        })
        
      $('.sticker:not(#not_draggable)').delegate("textarea","keydown", function(event){        
        if (event.keyCode == 13){
            var text1 = $(this).val() + '<a href="#" title="Delete this sticker" class="icon_delete"> <img src="http://localhost:3000/assets/delete-icon.png" alt="Delete sticker"/> </a>';
          $(this).parent().html(text1);
          $(this).remove(); 
        };   
           });
      $('.sticker:not(#not_draggable)').delegate("textarea", "blur", function(){
          var text1 = $(this).val() + '<a href="#" title="Delete this sticker" class="icon_delete"> <img src="http://localhost:3000/assets/delete-icon.png" alt="Delete sticker"/> </a>';
          $(this).parent().html(text1);
          $(this).remove();
      })
      
       $('body').delegate(".icon_delete", "click", function(){
          $(this).parent().remove();    
       });   
     
  })
  
  // delete current sticker
  $('.icon_delete').click(function(){
       $(this).parent().remove();
  })
        
  // Change text of sticker
  $('.sticker:not(#not_draggable)').dblclick(function(){
      var variable1 = $(this).text();
      var variable = variable1.trim();
      $(this).append('<textarea style="resize: none; overflow: hidden;" autofocus cols="17" rows="4" maxlength="100" scrolling="off">' + variable + ' </textarea>');
      
      // alert(variable);
      $('body').delegate("textarea","keydown", function(event){
        if (event.keyCode == 13){
            var text1 = $(this).val() + ' <a href="#" title="Delete this sticker" class="icon_delete"> <img src="http://localhost:3000/assets/delete-icon.png" alt="Delete sticker"/> </a>';
          $(this).parent().html(text1);
          $("textarea").remove(); 
        };   
      });
      
      $('body').delegate("textarea", "focusout", function(){
          var text1 = $(this).val() + ' <a href="#" title="Delete this sticker" class="icon_delete"> <img src="http://localhost:3000/assets/delete-icon.png" alt="Delete sticker"/> </a>';
          $(this).parent().html(text1);
          $(this).remove();
      });
        
       $('body').delegate(".icon_delete", "click", function(){
          $(this).parent().remove();    
       });
  }) 
  
  /* ending tag*/     
});