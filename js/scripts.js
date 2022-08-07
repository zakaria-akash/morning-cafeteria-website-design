$(document).ready(function(){
    //jquery methods for carousel
      $("#mycarousel").carousel( { interval: 2000 } );
      $("#carouselButton").click(function(){
        if($("#carouselButton").children("span").hasClass("fa-pause")) {
          $("#mycarousel").carousel("pause");
          $("#carouselButton").children("span").removeClass("fa-pause");
          $("#carouselButton").children("span").addClass("fa-play");
        } else {
          $("#mycarousel").carousel("cycle");
          $("#carouselButton").children("span").removeClass("fa-play");
          $("#carouselButton").children("span").addClass("fa-pause");
        }
      });

      //jquery methods for Reserve Table button and its modal
      $("#reserveButton").click(function() {
        $("#reserveModal").modal("toggle");
      });
      $("#cancelReserve").click(function() {
        $("#reserveModal").modal("hide");
      });
      $("#crossReserve").click(function() {
        $("#reserveModal").modal("hide");
      });
      $('#sectionButtons').attr("data-toggle", "buttons");
      
      //jquery methods for Login button and its modal
      $("#loginSpan").click(function() {
        $("#loginModal").modal("toggle");
      });
      $("#loginCancelButton").click(function() {
        $("#loginModal").modal("hide");
      });
      $("#loginExitButton").click(function() {
        $("#loginModal").modal("hide");
      });
  });