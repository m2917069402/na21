
    $(document).ready(function() {

        
        $('#datePicker').val(getDate());

        $('#setHour1').click(function(){
            alert("getTime()");
            $('#setHour1').html(getTime()); 
        });
        $('#setHour2').click(function(){
            $('#setHour2').prop("value",getTime());
        });
        $('#setHour3').click(function(){
            $('#setHour3').prop("value",getTime());
        });
        $('#setHour4').click(function(){
            $('#setHour4').prop("value",getTime()); 
        });
        $('#setHour5').click(function(){
            $('#setHour5').prop("value",getTime());
        });
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
        function　getTime()
        {
            var now = new Date();
            var month = (now.getMonth() + 1);               
            var day = now.getDate();
            if (month < 10) 
                month = "0" + month;
            if (day < 10) 
                day = "0" + day;
            var today = now.getHours + ':' + now.getMinutes;
            return today;
        }

    });