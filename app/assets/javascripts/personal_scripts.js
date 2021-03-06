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

    // send data to server
      function send_ajax(){
      
           // check parametrs of stickers
            var id_board = $('#name_of_board').attr("board_id");
            var stickers = new Array;
               
          $(".sticker:not(#not_draggable)").each(function(i){
             var s_text = $(this).text().trim();
              var s_color = $(this).attr('class').toString().substr(14,25);
              var s_status = $(this).attr('data-current-status');
              var sticker = new Array;
                 sticker = [s_text, s_color, id_board, s_status];
            // array with stickers 
            stickers.push(sticker);
          });
      
          $.ajax({
                type: 'POST',
                beforeSend: function(xhr) {xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'))},
                url:'/show_me/send',
                
                statusCode: {
                    404: function(){
                        $('.message').text('Page not found');
                    }
                },
                data: {stickers: stickers}, 
                success: function(data){
                    // alert('All your data was saved and serevr answered ' + data);
                }
            }).error(function(){
                // alert ('ann error occured!!!')
                })
            .success(function(){
                // alert('Ajax was sendet successfully');
            })
            .complete(function(){
            });
   }

 // add/change parameters for stickers
 
    var stop_message = function (ui) {
      //alert("Now I'm in " + $(ui.item).parent().attr('class').split(" ")[0]);
 
      var data = $(ui.item).parent().attr('class').split(" ",[1]).toString().substr(6,11);
      //alert(data)
      $(ui.item).attr('data-current-status', data);
      send_ajax();
    }; 

     /* configurations of block to_do to cach the stickers */
  $(".block_to_do").sortable({
    items: "> div:gt(0)", // prototype sticker can't be moved
    revert: 10,
    connectWith: [".block_in_progress", ".block_done"],
     stop: function (event, ui) {
      stop_message(ui); 
    },
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
     stop: function (event, ui) {
      stop_message(ui); 
    } , 
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
    stop: function (event, ui) {
      stop_message(ui);
    },
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
    $('#name_of_board').focus(function(event){
        this_val = $(this);
        minlength = this_val.attr('minlength');
        if (minlength !=0 && minlength > 0 && this_val.val().length<minlength){
            this_val.after('<span id="remember">' + minlength +' characters required</span>');
            event.stopImmediatePropagation();
        }
        
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
  $("#not_draggable").click(function(event){
      event.stopImmediatePropagation();
      var arr = ["yellow", "blue", "green", "purple"];
      var rand = Math.floor( Math.random() * arr.length );
        //alert(arr[rand]);
      $('<div class = "sticker color ' + arr[rand] + '" data-current-status="to_do" > New sticker <a href="#" title="Delete this sticker" class="icon_delete"> <img src="assets/delete-icon.png" alt="Delete sticker"/> </a> </div>').appendTo(".block_to_do");
      
      $('body').delegate(".sticker:not(#not_draggable)", "mouseenter", function(){
          $(this).find('.icon_delete').css('display','block');
      });
       
       $('body').delegate(".sticker:not(#not_draggable)", "mouseleave", function(){
          $(this).find('.icon_delete').css('display','none');
      });
      
      $('body').delegate(".icon_delete", "click", function(){
           $(this).parent().remove();
           send_ajax();
      });
      
      $('body').delegate(".sticker:not(#not_draggable)", "dblclick", function(event){
            event.stopImmediatePropagation();
            var variable1 = $(this).text();
            var variable = variable1.trim();
                $(this).append('<textarea style="resize: none; overflow: hidden; position:relative; left: -14px; top:5px;" autofocus cols="17" rows="4" maxlength="100" scrolling="off">' + variable + ' </textarea>');
              //alert(variable);
            send_ajax();
            return false;
       }); 
        
      $('.sticker:not(#not_draggable)').delegate("textarea","keydown", function(event){        
            if (event.keyCode == 13){
                var text1 = $(this).val() + '<a href="#" title="Delete this sticker" class="icon_delete"> <img src="assets/delete-icon.png" alt="Delete sticker"/> </a>';
              $(this).parent().html(text1);
              $(this).remove();
              send_ajax(); 
            };   
      });
            
      $('.sticker:not(#not_draggable)').delegate("textarea", "blur", function(){
              var text1 = $(this).val() + '<a href="#" title="Delete this sticker" class="icon_delete"> <img src="assets/delete-icon.png" alt="Delete sticker"/> </a>';
              $(this).parent().html(text1);
              $(this).remove();
              send_ajax();
      });
      
      $('body').delegate(".icon_delete", "click", function(){
              $(this).parent().remove(); 
              send_ajax();   
      }); 
      
       send_ajax();    
      
      return false;
  })
  
  // delete current sticker
  $('.icon_delete').click(function(){
       $(this).parent().remove();
       
       send_ajax();
  })
        
  // Change text of sticker
  $(".sticker:not(#not_draggable)").dblclick(function(event){
      event.stopImmediatePropagation();
      var variable1 = $(this).text();
      var variable = variable1.trim();
      $(this).append('<textarea style="resize: none; overflow: hidden; position:relative; left: -14px; top:5px;" autofocus cols="17" rows="4" maxlength="100" scrolling="off">' + variable + ' </textarea>');
      
      // alert(variable);
      $('body').delegate("textarea","keydown", function(event){
        if (event.keyCode == 13){
            var text1 = $(this).val() + ' <a href="#" title="Delete this sticker" class="icon_delete"> <img src="assets/delete-icon.png" alt="Delete sticker"/> </a>';
          $(this).parent().html(text1);
          $("textarea").remove(); 
          send_ajax();
        };   
      });
      
      $('body').delegate("textarea", "focusout", function(){
          var text1 = $(this).val() + ' <a href="#" title="Delete this sticker" class="icon_delete"> <img src="assets/delete-icon.png" alt="Delete sticker"/> </a>';
          $(this).parent().html(text1);
          $(this).remove();
          send_ajax();
      });
        
       $('body').delegate(".icon_delete", "click", function(){
          $(this).parent().remove(); 
          send_ajax();   
       });
  }) 
  
  // pisiton of button - always middle
        function move_div(){
        var w_width = $(window).width();
        obj_width = $('#submit_changes').width();
        $('#submit_changes').css('left',(w_width-obj_width)/2 );
        }
        
        move_div();
        
        $(window).resize(function(){
            move_div();
        })
  
  /* ending tag*/     
});