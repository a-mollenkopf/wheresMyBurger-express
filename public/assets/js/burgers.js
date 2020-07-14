$(document).ready(function() {
  $(document).on("submit", function (event) {
      event.preventDefault();
      var newBurger = {
        burger_name: $("#devour").val(),
        devoured: 0,
      };
  
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger,
      }).then(function () {
        console.log("Created new burger!")
        location.reload();
      });
    });
});
