(function($) {
    "use strict"; // Start of use strict



$ (".btn-warning").on("click", function(){
    var text = $(this).text();
    alert("This does absolutely nothing!");

});



    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

//     $("#style_image").hover(function(){
//     $(this).filter(':not(:animated)').animate({ width: "300px"});
// }, function() {
//     $(this).animate({ height: "300px"  });
// });



    $(".logo").hover(function(){
    $(this).filter(':not(:animated)').animate({ width: "300px"});
}, function() {
    $(this).animate({ width: "100px" });
});



    $(".navbar-custom .navbar-toggle").hover(function(){
    $(this).filter(':not(:animated)').animate({ width: "200px" });
}, function() {
    $(this).animate({ width: "100px" });
});

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function(){ 
            $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })







    // Floating label headings for the contact form
    $(function() {
        $("body").on("input propertychange", ".floating-label-form-group", function(e) {
            $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
        }).on("focus", ".floating-label-form-group", function() {
            $(this).addClass("floating-label-form-group-with-focus");
        }).on("blur", ".floating-label-form-group", function() {
            $(this).removeClass("floating-label-form-group-with-focus");
        });
    });

})(jQuery); // End of use strict
