(function ($) {
  $(function () {

    $('.sidenav').sidenav();

  });
  $(window).scroll(function () {
    $('#allImages div').each(function () {
      console.log("hi, this image has padding of: " + $(this).offset().top);
      var imagePos = $(this).offset().top;

      var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow + 400) {
        $(this).addClass("slideUp");
      }
    });
  }); // end of document ready
})(jQuery); // end of jQuery name space