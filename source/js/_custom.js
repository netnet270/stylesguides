$(document).ready(function() {
  $(".js-toggle-icon").each(function () {
    $(this).click(function (e) { 
      e.preventDefault();
      $(this).toggleClass("show");
    });
  });
});