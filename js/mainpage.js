$(document).ready(function() {

    $('[data-toggle="tooltip"]').tooltip();

    //$('.scroll-pane').jScrollPane();

});

$(document).on('focusin', function(e) {
    if ($(e.target).closest(".mce-window").length) {
        e.stopImmediatePropagation();
    }
});

$(window).on('resize', doresize);
$(window).on('load',doresize);

function doresize(){
console.log("function called");
debugger
  var winWidth = $(window).width();
  var contentAreaHeight = $('#mainarea-inner-content').height();
  contentAreaHeight-=80;
  console.log(contentAreaHeight);
if ( winWidth > 900) {
  console.log("Dushyant 900");
  tinymce.init({
      selector: 'textarea',
      menubar: false,
      height: contentAreaHeight,
      plugins: [
          'advlist autolink lists link charmap print preview anchor',
          'searchreplace visualblocks code fullscreen',
          'insertdatetime media table contextmenu paste code'
      ],
      toolbar: 'undo redo | insert | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent',
      content_css: '//www.tinymce.com/csscodepen.min.css'
  });
}
else if(winWidth <900 && winWidth>396){
  console.log("Dushyant <900");
  tinymce.init({
      selector: 'textarea',
      menubar: false,
      height: contentAreaHeight,
      plugins: [
          'advlist autolink lists link charmap print preview anchor',
          'searchreplace visualblocks code fullscreen',
          'insertdatetime media table contextmenu paste code'
      ],
      toolbar: 'undo redo | insert | styleselect | bullist numlist outdent indent',
      content_css: '//www.tinymce.com/csscodepen.min.css'
  });
}else if(winWidth <396){
  console.log("Dushyant <396");
  tinymce.init({
      selector: 'textarea',
      menubar: false,
      height: contentAreaHeight,
      plugins: [
          'advlist autolink lists link charmap print preview anchor',
          'searchreplace visualblocks code fullscreen',
          'insertdatetime media table contextmenu paste code'
      ],
      toolbar: 'insert | styleselect | bullist numlist',
      content_css: '//www.tinymce.com/csscodepen.min.css'
  });
}
}
