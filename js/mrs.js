
$(document).ready(function()
{

  $("#home-header").load("/html/elements/header.html");

  $("#nav").load("/html/elements/nav.html");

  $("#page").load("/html/views/description.html");

  $("#team").load("/html/views/team.html");

  $("#projects").load("/html/views/projects.html");

  $("#debug").click(function()
  {
    console.log("clicked");
    $(".debug").css("border", "1px solid red");
  });

});

$(window).resize(function()
{
  $(".header-container").height($(window).height());
  $(".header-container").width($(window).width());

  if($(window).scrollTop() >= $(window).height())
  {
    $("#nav").css("top", "0");
  }
  else
    $("#nav").css("top", $(window).height() - $(window).scrollTop());

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
