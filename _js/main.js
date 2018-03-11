import $ from "jquery";
import ScrollReveal from "scrollreveal";

console.log($);

$(document).ready(function() {
    $('.navbar-burger').on('click', function() {
      let $this = $(this);
      let $target = $('#' + $this.data('target'));
      $this.toggleClass('is-active')
      $target.toggleClass('is-active');
      $this.closest('nav').toggleClass('is-active');
    });

  window.sr = ScrollReveal({
    distance: '5rem',
    scale: 1,
    delay: 100,
    afterReveal: function(element) {
      $(element).addClass('revealed');
    }
  });
  sr.reveal('.left-aligned .reveal', {origin: 'left'});
  sr.reveal('.right-aligned .reveal', {origin: 'right'});
  sr.reveal('.center-aligned .reveal', {origin: 'bottom'});

  var articleContent = $('.article').html();
  var iframePart1 = '<div class="youtube-video-wrapper"><iframe width="560" height="315" src="https://www.youtube.com/embed/';
  var iframePart2 = '?rel=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div>';
  var re1 = new RegExp('<p>%youtube ', 'g');
  var re2 = new RegExp('%</p>', 'g');
  var articleContent = articleContent.replace(re1, iframePart1);
  var articleContent = articleContent.replace(re2, iframePart2);
  $('.article').html(articleContent);
});
