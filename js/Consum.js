$(document).ready(function() {
    $('#datePicker').val(getDate());
function　getDate()
{
    var now = new Date();
    var month = (now.getMonth() + 1);               
    var day = now.getDate();
    if (month < 10) 
        month = "0" + month;
    if (day < 10) 
        day = "0" + day;
    var today = now.getFullYear() + '-' + month + '-' + day;
    return today;
}
$('#searchDate').click(function(){
    
    $('#dateTable').html($('#datePicker').val());
    $('#dateSector').show();
    $('#dataSector').show();
    $('#back2').show();
});
$('#datePicker').change(function() {
    $('#dateTable').html(this.value);
    
 });
});
