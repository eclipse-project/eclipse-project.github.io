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
});
