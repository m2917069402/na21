
    $(document).ready(function() {

        
        $('#datePicker').val(getDate());

        $('#setHour1').click(function(){
          
            $('#setHour1').html(getTime());
            $('#setHour1').css('backgroundImage','url(../images/btn-green.jpg)');
        });
        $('#setHour2').click(function(){
            $('#setHour2').html(getTime()); 
            $('#setHour2').css('backgroundImage','url(../images/btn-green.jpg)');
        });
        $('#setHour3').click(function(){
            $('#setHour3').html(getTime()); 
            $('#setHour3').css('backgroundImage','url(../images/btn-green.jpg)');
        });
        $('#setHour4').click(function(){
            $('#setHour4').html(getTime());  
            $('#setHour4').css('backgroundImage','url(../images/btn-green.jpg)');
        });
        $('#setHour5').click(function(){
            $('#setHour5').html(getTime()); 
            $('#setHour5').css('backgroundImage','url(../images/btn-green.jpg)');
        });
        $('#setHour6').click(function(){
            $('#setHour6').html(getTime()); 
            $('#setHour6').css('backgroundImage','url(../images/btn-green.jpg)');
        });
        $('#setHour7').click(function(){
            $('#setHour7').html(getTime()); 
            $('#setHour7').css('backgroundImage','url(../images/btn-green.jpg)');
        });
        $('#setHour8').click(function(){
            $('#setHour8').html(getTime()); 
            $('#setHour8').css('backgroundImage','url(../images/btn-green.jpg)');
        });
        $('#setHour9').click(function(){
            $('#setHour9').html(getTime()); 
            $('#setHour9').css('backgroundImage','url(../images/btn-green.jpg)');
        });
        $('#setHour10').click(function(){
            $('#setHour10').html(getTime()); 
            $('#setHour10').css('backgroundImage','url(../images/btn-green.jpg)');
        });
        $('#setHour11').click(function(){
            $('#setHour11').html(getTime()); 
            $('#setHour11').css('backgroundImage','url(../images/btn-green.jpg)');
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
            var today = now.getHours() + ':' + (String(now.getMinutes()).padStart(2, '0'));
            
            return today;
        }

    });