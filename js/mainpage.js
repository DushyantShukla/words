var isAdded = false;
var winWidth = $(window).width();

$(document).ready(function() {

    $('[data-toggle="tooltip"]').tooltip();

    //$('.scroll-pane').jScrollPane();
    $('[data-toggle="toggle"]').unbind('click').click(function() {
        //debugger
        var selector = $(this).data("target");
        $(selector).toggleClass('in');
    });
});

$(document).on('focusin', function(e) {
    if ($(e.target).closest(".mce-window").length) {
        e.stopImmediatePropagation();
    }
});

$(window).on('resize', doresize);
$(window).on('load', doresize);

$(function() {
    $('body').on('click', '#header-new', function() {
        console.log("show");
        tinymce.editors['content-textarea'].show();
    });

    $('body').on('click', '#cancelchangedarticle', function() {
        console.log("hide");
        tinymce.editors['content-textarea'].hide();
    });
});

function doresize() {
    console.log("function called");
        if (!isAdded && winWidth >= 780) {
            isAdded = true;
            $('#column-wrap').append('<div id="mainarea"><div id="mainarea-inner"><div id="mainarea-inner-header" class="mainareaHeaderContent"><div id="deletearticle"><a href="#" data-toggle="tooltip" class="anchor-style" title="delete article" data-placement="left" id="expandarticle-anchor">' +
                '<span class="glyphicon glyphicon-trash"></span></a></div>' +
                '<div id="cancelchangedarticle"><a href="#" data-toggle="tooltip" class="anchor-style" title="discard changes" data-placement="left" id="expandarticle-anchor"><span class="glyphicon glyphicon-floppy-remove"></span></a></div>' +
                '<div id="savearticle"><a href="#" data-toggle="tooltip" class="anchor-style" title="save changes" data-placement="left" id="expandarticle-anchor"><span class="glyphicon glyphicon-floppy-save"></span></a></div>' +
                '<div id="saveanddone"><a href="#" data-toggle="tooltip" class="anchor-style" title="save and done" data-placement="left" id="expandarticle-anchor"><span class="glyphicon glyphicon-check"></span></a></div>' +
                '<div id="editarticle"><a href="#" data-toggle="tooltip" class="anchor-style" title="edit article" data-placement="left" id="expandarticle-anchor"><span class="glyphicon glyphicon-edit"></span></a></div>' +
                '</div><div id="mainarea-inner-content" class="mainareaHeaderContent">' +
                '<div id="content-textarea"></div></div></div></div>'
            );
        } else if (isAdded && winWidth < 780) {
            isAdded = false;
            $('#mainarea').remove();
        }

    var contentAreaHeight = $('#mainarea-inner-content').height();
    contentAreaHeight -= 44;
    console.log(contentAreaHeight);
    if (winWidth > 900) {
        console.log("Dushyant 900");
        tinymce.init({
            selector: '#content-textarea',
            menubar: false,
            statusbar: false,
            resize: false,
            height: contentAreaHeight,
            body_class: 'mceBlackBody',
            plugins: [
                'advlist autolink lists link charmap print preview anchor',
                'searchreplace visualblocks code fullscreen',
                'insertdatetime media table contextmenu paste code'
            ],
            toolbar: 'undo redo | insert | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent|fullscreen',
            content_css: '../css/mainpagecss/tinymcecontentstylesheet.css',
            setup: function(ed) {
                ed.on('init', function(e) {
                    e.target.hide();
                });
            }
        });
    } else if (winWidth < 900 && winWidth > 396) {
        console.log("Dushyant <900");
        tinymce.init({
            selector: '#content-textarea',
            menubar: false,
            statusbar: false,
            resize: false,
            height: contentAreaHeight,
            plugins: [
                'advlist autolink lists link charmap print preview anchor',
                'searchreplace visualblocks code fullscreen',
                'insertdatetime media table contextmenu paste code'
            ],
            toolbar: 'undo redo | insert | styleselect | bullist numlist outdent indent',
            content_css: '//www.tinymce.com/csscodepen.min.css',
            setup: function(ed) {
                ed.on('init', function(e) {
                    e.target.hide();
                });
            }
        });
    } else if (winWidth < 396) {
        console.log("Dushyant <396");
        tinymce.init({
            selector: '#content-textarea',
            menubar: false,
            statusbar: false,
            resize: false,
            height: contentAreaHeight,
            plugins: [
                'advlist autolink lists link charmap print preview anchor',
                'searchreplace visualblocks code fullscreen',
                'insertdatetime media table contextmenu paste code'
            ],
            toolbar: 'insert | styleselect | bullist numlist',
            content_css: '//www.tinymce.com/csscodepen.min.css',
            setup: function(ed) {
                ed.on('init', function(e) {
                    e.target.hide();
                });
            }
        });
    }
}
