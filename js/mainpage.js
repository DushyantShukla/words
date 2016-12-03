$(document).ready(function () {
    $('#fullpage').fullpage({
        anchors: ['page1'],
        controlArrows: false,
        verticalCentered: false
    });
    $.fn.fullpage.setScrollingSpeed(600);

    /*$('#header-turnoff').tooltip({
        placement : 'right'
    });

    $('#doneandsave').tooltip({
        placement : 'bottom'
    });

    $('#dumpandgoback').tooltip({
        placement : 'bottom'
    });

    $('#header-search').tooltip({
        placement : 'right'
    });*/


    $('[data-toggle="tooltip"]').tooltip();

    //$('.scroll-pane').jScrollPane();
});

  $(document).on('click', '#movetonewarticle', function () {
      $.fn.fullpage.moveTo('page1', 1);
      console.log("done");
  });

  $(document).on('click', '#dumpandgoback', function () {
      $.fn.fullpage.moveTo('page1', 0);
      console.log("done");
  });

  $(document).on('click', '#doneandsave', function () {
      $.fn.fullpage.moveTo('page1', 0);
      console.log("done");
  });

  $(document).on('click', '#expandarticle-anchor', function () {
      $.fn.fullpage.moveTo('page1', 1);
      console.log("done");
  });

  /*$(document).ready(function(){
	$('.scroll-pane').jScrollPane();
  console.log('DUshnat');
});*/
