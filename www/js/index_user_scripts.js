/*jshint browser:true */
/*global $ */(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
    
     /* button  #btn_menu */
    
    
        /* listitem  #btn_leitura */
    
    
        /* listitem  #btn_leitura */
    
    
        /* listitem  Cartas de Cristo2 */
    
    
        /* button  #btn_back */
    $(document).on("click", "#btn_back", function(evt)
    {
         /*global activate_page */
         activate_page("#mainpage");
         return false;
    });

        /* button  #btn_menu */
    
    
        /* button  #btn_menu */
    $(document).on("click", "#btn_menu", function(evt)
    {
         /*global uib_sb */
         /* Other possible functions are: 
           uib_sb.open_sidebar($sb)
           uib_sb.close_sidebar($sb)
           uib_sb.toggle_sidebar($sb)
            uib_sb.close_all_sidebars()
          See js/sidebar.js for the full sidebar API */
        
         uib_sb.toggle_sidebar($("#sidebar_left"));  
         return false;
    });
    
        /* listitem  #btn_leitura */
    $(document).on("click", "#btn_leitura", function(evt)
    {
         /*global activate_page */
         activate_page("#uib_page_reading"); 
         return false;
    });
    
        /* listitem  Cartas de Cristo2 */
    $(document).on("click", ".uib_w_6", function(evt)
    {
         /*global activate_page */
         activate_page("#uib_page_reading"); 
         return false;
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
