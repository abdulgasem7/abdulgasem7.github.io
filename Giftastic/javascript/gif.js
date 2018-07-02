var giftastic = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=YOUR_API_KEY&limit=5");
giftastic.done(function (data) {
});

var apiKey = "lnMqViWeHXUSdxkRmCnkYnYoF34nT7c4";

$(document).ready(function () {
    // An empty array of gifs to be added and pushed into later
    var emptyArray = [];
    // Function for all gif buttons
    function displayGifButtons() {
        $("#viewGifButtons").empty(); 
        for (var i = 0; i < emptyArray.length; i++) {
            var gifButton = $("<button>");
            gifButton.addClass("action");
            gifButton.addClass("btn btn-primary")
            gifButton.attr("data-name", emptyArray[i]);
            gifButton.html(emptyArray[i]);
            $("#viewGifButtons").append(gifButton);
        }
    }
    // Function to get value of new search button
    function addNewButton() {
        $("#addGif").on("click", function () {
            var action = $("#action-input").val().trim();
            if (action == "") {
                return false; 
            }
            emptyArray.push(action);
            displayGifButtons();
            return false;
        });
    }
    // Function to remove buttons
    function removeLastButton() {
        $("removeGif").on("click", function () {
            emptyArray.pop(action);
            return false;
        });
    }
    // Function that displays all of the gifs
    function displayGifs() {
        var action = $(this).attr("data-name");
        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + action + "&api_key=lnMqViWeHXUSdxkRmCnkYnYoF34nT7c4&limit=10";
        $.ajax({
                url: queryURL,
                method: 'GET'
            })
            .done(function (response) {
                $("#giftyView").empty();
                var results = response.data;
                if (results == "") {
                    alert("The Gif Is Not Available");
                }
                for (var i = 0; i < results.length; i++) {

                    var gifDiv = $("<div>");
                    gifDiv.addClass("gifDiv");

                    var gifRating = $("<p>").text("Rating: " + results[i].rating);
                    gifDiv.append(gifRating);

                    var gifImage = $("<img>");
                    gifImage.attr("src", results[i].images.fixed_height_small_still.url); // still image stored into src of image
                    gifImage.attr("data-still", results[i].images.fixed_height_small_still.url); // still image
                    gifImage.attr("data-animate", results[i].images.fixed_height_small.url); // animated image
                    gifImage.attr("data-state", "still"); 
                    gifImage.addClass("image");
                    gifDiv.append(gifImage);
                    $("#giftyView").prepend(gifDiv);
                }
            });
    }
    // Hello Functions
    displayGifButtons(); 
    addNewButton();
    removeLastButton();
    $(document).on("click", ".action", displayGifs);
    $(document).on("click", ".image", function () {
        var state = $(this).attr('data-state');
        if (state == 'still') {
            $(this).attr('src', $(this).data('animate'));
            $(this).attr('data-state', 'animate');
        } else {
            $(this).attr('src', $(this).data('still'));
            $(this).attr('data-state', 'still');
        }
    });
});