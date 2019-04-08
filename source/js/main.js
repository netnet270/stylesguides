//=require jquery/dist/jquery.min.js
//=require bootstrap/dist/js/bootstrap.min.js
//=require _custom.js

$(document).ready(function() {
  $(".js-toggle-icon").each(function () {
    $(this).click(function (e) { 
      e.preventDefault();
      $(this).toggleClass("show");
    });
  });
});