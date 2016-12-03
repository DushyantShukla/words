$(document).ready(function () {
    $('#fullpage').fullpage({
        anchors: ['page1'],
        controlArrows: false,
        verticalCentered: false
    });
    $.fn.fullpage.setScrollingSpeed(1300);
    //$(":radio").behaveLikeCheckbox();

  });

  $(document).on('click', '#movetowelcome', function () {
      $.fn.fullpage.moveTo('page1', 0);
      console.log("done");
  });

  $(document).on('click', '#movetosignin', function () {
      $.fn.fullpage.moveTo('page1', 1);
      console.log("done");
  });

  $(document).on('click', '#movetosignup', function () {
      $.fn.fullpage.moveTo('page1', 2);
      console.log("done");
  });

  $(document).ready(function(){
    $('[data-toggle="popover"]').popover({
        placement : 'bottom'
    });
});
