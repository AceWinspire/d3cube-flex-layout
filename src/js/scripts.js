$(document).ready(function(){
    //side menu click /toggle on/-ff
    $(".menu-open").click(function(){
      $(".sidenav").animate({
        width: "toggle"
    });
      $("body").addClass("menu-active"); 
    });

    $(".menu-close").click(function(){
        $(".sidenav").animate({
            width: "toggle"
        });
        $("body").removeClass("menu-active"); 
        event.stopPropagation();

    });

    // Scroll function / fix for Safari
    $("a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                window.location.hash = hash;
            });
        } 
    });
});
