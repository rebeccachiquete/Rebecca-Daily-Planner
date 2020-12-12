// create total function
$(document).ready(function(){

    // make current day 
var currentDay = moment().format('MMM Do YYYY, h:mm:ss a');
    // display current day
$("#currentDay").text(currentDay)
    // global variables
var dayHours = moment().format('hh');
var tables = $(".row");
var hours = [9, 10, 11, 12, 13, 14, 15, 16, 17];
var textArea = $("textarea");
    // create loop
for (var i = 0; i < hours.length; i++) {
    var dayHours = parseInt(dayHours);
    var htmlHours = hours[i];
    var tableLoop = tables[i];

    if (htmlHours === dayHours) {
        $(tableLoop).addClass("present");
    }
    if (htmlHours < dayHours) {
        $(tableLoop).addClass("past");
    }
    if (htmlHours > dayHours) {
        $(tableLoop).addClass("future");
    }
}
    // when refreshing page, tasks will remain
var typedTasks = JSON.parse(localStorage.getItem("Tasks"));

    if (typedTasks !== null) {
    $(textArea[0]).text(typedTasks.nine);
    $(textArea[1]).text(typedTasks.ten);
    $(textArea[2]).text(typedTasks.eleven);
    $(textArea[3]).text(typedTasks.twelve);
    $(textArea[4]).text(typedTasks.one);
    $(textArea[5]).text(typedTasks.two);
    $(textArea[6]).text(typedTasks.three);
    $(textArea[7]).text(typedTasks.four);
    $(textArea[8]).text(typedTasks.five);
}
    // save function and tasks when saving button is clicked
function saveTypedTasks(event) {
    event.preventDefault();

    var tasks = {
        nine: textArea[0].value.trim(),
        ten: textArea[1].value.trim(),
        eleven: textArea[2].value.trim(),
        twelve: textArea[3].value.trim(),
        one: textArea[4].value.trim(),
        two: textArea[5].value.trim(),
        three: textArea[6].value.trim(),
        four: textArea[7].value.trim(),
        five: textArea[8].value.trim(),
    }
    // store in logal storage
    localStorage.setItem("Tasks", JSON.stringify(tasks));
}
    // finish function
    $(".saveBtn").on("click", saveTypedTasks);

})