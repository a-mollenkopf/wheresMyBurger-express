$(document).ready(function() {
  $(document).on("submit", function (event) {
      event.preventDefault();
      const newBurger = {
        burger_name: $("#devour").val(),
        devoured: 0,
      };
  
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger,
      }).then(function () {
        location.reload();
      });
    });

    $(".eatButton").on("click", function (event) {
      event.preventDefault();
      const id = this.dataset.id;
     
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        // data: devouredState
      }).then(
        function () {
          location.reload();
        }
      );
    });
});
