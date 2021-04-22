var currentDate = new Date();
var date = $('#date');
date.html(currentDate.toLocaleDateString());
var hour = currentDate.getHours();
var id;

if (hour < 12) {
    id = "am" + hour;
} else if (hour > 12) {
    id = "pm" + (hour - 12)
} else {
    id = "pm12";
}
var row = $("#" + id);
if (row) {
    row.addClass("current");
}
var rows = $("main div");

$.each(rows, getAppt);

function getAppt(index, row) {
    var appt = localStorage.getItem(row.id);

    if (appt) {
        $(row).find("textarea").val(appt);
    }
}
$.each(rows, saveBtn);
function saveBtn(index, row) {
    $(row).find("button").click(handleSave);
}
function handleSave(){
    var row = $(this).parent();
    var id = row.attr("id");
    var appt = row.find("textarea").val();
    localStorage.setItem(id,appt);
         
}
