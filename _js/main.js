import $ from "jquery";
import ScrollReveal from "scrollreveal";

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
  if ($('.reveal').length) {
    sr.reveal('.reveal', { duration: 1000, easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)' });
  }
  if ($('.diagonal-top.reveal').length) {
    sr.reveal('.diagonal-top.reveal', {distance: '50vh'})
  }

  renderYoutubeVideos();

  $('.has-dropdown').on('click', function() {
    $(this).toggleClass('is-active');
  });

  $('.language-selector-mobile-trigger').on('click', function() {
    $(this).parent().find('.languages').toggleClass('hidden');
  });
});

function renderYoutubeVideos() {
  var $articles = $('.article');
  if ($articles.length) {
    for (var i = 0; i < $articles.length; i++) {
      let $article = $($articles[i]);
      var articleContent = $article.html();
      var iframePart1 = '<div class="youtube-video-wrapper"><iframe width="560" height="315" src="https://www.youtube.com/embed/';
      var iframePart2 = '?rel=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div>';
      var re1 = new RegExp('<p>%youtube ', 'g');
      var re2 = new RegExp('%</p>', 'g');
      var articleContent = articleContent.replace(re1, iframePart1);
      var articleContent = articleContent.replace(re2, iframePart2);
      $article.html(articleContent);
    }
  }
}
