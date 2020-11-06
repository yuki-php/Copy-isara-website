$(function(){

    $('.panel-head').click(function() {
      var $collapse = $('.collapse');
      if('$collapse'.hasClass('open')) {
        $collapse.removeClass('open');

        $collapse.slideUp();
      } else {
        $collapse.addClass('open');

        $collapse.slideDown();
      }

    });
});