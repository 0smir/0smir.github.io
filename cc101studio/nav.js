
$(document).ready(function(){
        $("#menu").mmenu({
        		"slidingSubmenus": false,
               "extensions": [
                  "border-full",
                  "effect-menu-slide",
                  "theme-dark"
               ],
               "navbars": [
                  {
                     "position": "top",
                     "content": [
                        "searchfield"
                     ]
                  }
               ]
            });
        var API = $("#menu").data("mmenu");

        $("#mm-burger").click(function() {
            API.open();
        });


});









