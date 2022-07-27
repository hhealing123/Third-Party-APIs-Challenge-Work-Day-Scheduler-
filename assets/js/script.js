// Set up the format using moment.js.
var currentDate = moment().format("dddd, MMM Do");
$("#currentDay").html(currentDate);

// The below variables return element objects representing the element whose id property matches that's assigned in HTML.
var nineAM = $("#9am")
var tenAM = $("#10am")
var elvAM = $("#11am")
var twlvAM = $("#12pm")
var onePM = $("#1pm")
var twoPM = $("#2pm")
var threePM = $("#3pm")
var fourPM = $("#4pm")
var fivePM = $("#5pm")

var hour = moment().hour();
var userInput;
var hourString;

// Function that stores events in the specified time block.
function pageAction() {
    var timeNine = JSON.parse(localStorage.getItem("09:00 AM"));
    nineAM.val(timeNine);

    var timeTen = JSON.parse(localStorage.getItem("10:00 AM"));
    tenAM.val(timeTen);

    var timeElv = JSON.parse(localStorage.getItem("11:00 AM"));
    elvAM.val(timeElv);

    var timeTwlv = JSON.parse(localStorage.getItem("12:00 PM"));
    twlvAM.val(timeTwlv);

    var timeOne = JSON.parse(localStorage.getItem("01:00 PM"));
    onePM.val(timeOne);

    var timeTwo = JSON.parse(localStorage.getItem("02:00 PM"));
    twoPM.val(timeTwo);

    var timeThree = JSON.parse(localStorage.getItem("03:00 PM"));
    threePM.val(timeThree);

    var timeFour = JSON.parse(localStorage.getItem("04:00 PM"));
    fourPM.val(timeFour);

    var timeFive = JSON.parse(localStorage.getItem("05:00 PM"));
    fivePM.val(timeFive);
} 

// Creates logical statement. For example, if we are currently at 3 PM, all time block beyond 3 block will be applied
// with future css style, and so on.
function timePeriod() {
    $(".form-control").each(function () {
        var timeLogic = parseInt($(this).attr("id"));
        hour = parseInt(hour);
        if (hour > timeLogic) {
            $(this).addClass("past");
        } else if (hour < timeLogic) {
            $(this).addClass("future");
        } else {
            $(this).addClass("present");
        }
    });
}

// Document.ready function allows to make function available after the HTML document is fully loaded.
$(document).ready(function() {
    pageAction()
    timePeriod()

    $(".saveBtn").on("click", function() {
        console.log("saver");
        userInput = $(this).siblings(".form-control").val().trim();
        hourString = $(this).siblings(".input-group-prepend").text().trim();
        localStorage.setItem(hourString, JSON.stringify(userInput));
    })

// Clears the localstorage (events) that's saved by users.
    $("#reset").on("click", function() {
        localStorage.clear();
        pageAction();
    })
});