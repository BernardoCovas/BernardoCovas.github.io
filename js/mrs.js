
$(document).ready(function()
{

  $("#home-header").load("/html/elements/header.html", function()
  {
    $(".header-container").height($(window).height());
    $(".header-container").width($(window).width());
  });


  $("#nav").load("/html/elements/nav.html");

  $("#page").load("/html/views/description.html");

  $("#team").load("/html/elements/team.html");

});

$(window).resize(function()
{
  $(".header-container").height($(window).height());
  $(".header-container").width($(window).width());
});

$("#debug").click(function()
{
  $(".debug").css("border", "1px solid red");
});

$(window).scroll(function()
{
  if($(window).scrollTop() >= $(window).height())
  {
    $("#nav").css("top", "0");
  }
  else
    $("#nav").css("top", $(window).height() - $(window).scrollTop());

})
