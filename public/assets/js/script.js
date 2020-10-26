// devour function
$(function () {
    $(".devour").on("click", function (event) {
        const id = $(this).data("id");

        const eaten = {
            devoured: true
        };

        // send the put request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: eaten
        }).then(
            function () {
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function (event) {
        event.preventDefault();

        const newBurger = {
            name: $("#burg").val().trim()
        };

        // send the post request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("Inserted new Burger");
                location.reload();
            }
        );
    });
});