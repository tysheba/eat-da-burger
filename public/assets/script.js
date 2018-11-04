$(document).ready(function() {
    
    $("#newBurgerBtn").on("click", function(event) {
      event.preventDefault();
  
      var newBurger = {
          burger_name: $("#newBurger").val().trim(),
          devoured: false
      }
      console.log(newBurger);
      $.ajax("/api/burgers",{
        method: "POST",
        data: newBurger
      }).then(function(data) {
        // reload page to display burger
        console.log("Burger Added")
        console.log(data)
        location.reload();
      });
    });
  });

