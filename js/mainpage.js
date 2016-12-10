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

tinymce.init({
  selector: 'textarea',
  auto_focus: 'div#writingarea',
  height: 500,
  theme: 'modern',
  plugins: [
    'advlist autolink lists link image charmap print preview hr anchor pagebreak',
    'searchreplace wordcount visualblocks visualchars code fullscreen',
    'insertdatetime media nonbreaking save table contextmenu directionality',
    'emoticons template paste textcolor colorpicker textpattern imagetools codesample toc'
  ],
  toolbar1: 'undo redo | insert | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image',
  toolbar2: 'print preview media | forecolor backcolor emoticons | codesample',
  image_advtab: true,
  templates: [
    { title: 'Test template 1', content: 'Test 1' },
    { title: 'Test template 2', content: 'Test 2' }
  ],
  content_css: [
    '//fonts.googleapis.com/css?family=Lato:300,300i,400,400i',
    '//www.tinymce.com/css/codepen.min.css'
  ]
});

$(document).on('focusin', function(e) {
  if ($(e.target).closest(".mce-window").length) {
    e.stopImmediatePropagation();
  }
});
