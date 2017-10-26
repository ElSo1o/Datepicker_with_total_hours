$(document).ready(function () {
    function clickVal() {
        $("input").click(function () {
            $(this).val('');
        })
    }
    // function of show/hide bootstrap toggle
    function valid() {
        $("input").keyup(function () {
            var thisInput = $(this).val();
            if(thisInput > 12){
                $(this).css('color','red');
                $(this).tooltip('show',{ placement: "right" });
                $(this).blur(function(){
                    $(this).tooltip('hide');
                });
            }else{
                $(this).css('color','black');
                $(this).tooltip('hide');
            }
        })
    }
    //datePicker for calendar_input

    function countTotal() {
        $('tbody > tr input').keyup(function () {
            function countTotal_str() {
                var input_name_A = $('.table_hour tbody > tr:first-child > td input');
                var input_name_B = $('.table_hour tbody > tr:nth-child(2) > td input');
                var input_name_C = $('.table_hour tbody > tr:nth-child(3) > td input');
                var input_name_D = $('.table_hour tbody > tr:nth-child(4) > td input');
                //push value inputs in arr
                function vals_arr() {
                    return $(this).val();
                }
                var vals_name_A = input_name_A.map(vals_arr);
                var vals_name_B = input_name_B.map(vals_arr);
                var vals_name_C = input_name_C.map(vals_arr);
                var vals_name_D = input_name_D.map(vals_arr);
                //filter arr only number
                function only_num(i, number) {
                    return number > 0;
                }
                function notMore(i ,number) {
                        return number <= 12;
                }
                var arr_only_number_A = vals_name_A.filter(only_num);
                arr_only_number_A = arr_only_number_A.filter(notMore);

                var arr_only_number_B = vals_name_B.filter(only_num);
                    arr_only_number_B = arr_only_number_B.filter(notMore);

                var arr_only_number_C = vals_name_C.filter(only_num);
                arr_only_number_C = arr_only_number_C.filter(notMore);

                var arr_only_number_D = vals_name_D.filter(only_num);
                arr_only_number_D = arr_only_number_D.filter(notMore);

                //sum of all elements in arr
                var result_name_A = 0;
                var result_name_B = 0;
                var result_name_C = 0;
                var result_name_D = 0;
                for (var i = 0; i < arr_only_number_A.length; i++) {
                    result_name_A = result_name_A + parseInt(arr_only_number_A[i]);
                }
                for (var i = 0; i < arr_only_number_B.length; i++) {
                    result_name_B = result_name_B + parseInt(arr_only_number_B[i]);
                }
                for (var i = 0; i < arr_only_number_C.length; i++) {
                    result_name_C = result_name_C + parseInt(arr_only_number_C[i]);
                }
                for (var i = 0; i < arr_only_number_D.length; i++) {
                    result_name_D = result_name_D + parseInt(arr_only_number_D[i]);
                }
                $('.table_hour  tbody > tr:first-child td:last > p').text(result_name_A);
                $('.table_hour tbody > tr:nth-child(2) td:last > p').text(result_name_B);
                $('.table_hour tbody > tr:nth-child(3) td:last > p').text(result_name_C);
                $('.table_hour tbody > tr:nth-child(4) td:last > p').text(result_name_D);
            }
            function countTotal_column() {
                var inputs_name_mon = $('.table_hour tbody  tr  td:nth-child(2) input');
                var inputs_name_tue = $('.table_hour tbody  tr  td:nth-child(3) input');
                var inputs_name_wed = $('.table_hour tbody  tr  td:nth-child(4) input');
                var inputs_name_thu = $('.table_hour tbody  tr  td:nth-child(5) input');
                var inputs_name_fri = $('.table_hour tbody  tr  td:nth-child(6) input');
                var inputs_name_sat = $('.table_hour tbody  tr  td:nth-child(7) input');
                var inputs_name_sun = $('.table_hour tbody  tr  td:nth-child(8) input');
                //value of all column elements to an array
                function vals_arr() {
                    return $(this).val();
                }
                var vals_mon = inputs_name_mon.map(vals_arr);
                var vals_tue = inputs_name_tue.map(vals_arr);
                var vals_wed = inputs_name_wed.map(vals_arr);
                var vals_thu = inputs_name_thu.map(vals_arr);
                var vals_fri = inputs_name_fri.map(vals_arr);
                var vals_sat = inputs_name_sat.map(vals_arr);
                var vals_sun = inputs_name_sun.map(vals_arr);
                //filter array only number
                function only_num(i, number) {
                    return number > 0;
                }
                function notMore(i ,number) {
                    return number <= 12;
                }
                var arr_only_mon = vals_mon.filter(only_num);
                    arr_only_mon = arr_only_mon.filter(notMore);
                var arr_only_tue = vals_tue.filter(only_num);
                    arr_only_tue = arr_only_tue.filter(notMore);
                var arr_only_wed = vals_wed.filter(only_num);
                    arr_only_wed = arr_only_wed.filter(notMore);
                var arr_only_thu = vals_thu.filter(only_num);
                    arr_only_thu = arr_only_thu.filter(notMore);
                var arr_only_fri = vals_fri.filter(only_num);
                    arr_only_fri = arr_only_fri.filter(notMore);
                var arr_only_sat = vals_sat.filter(only_num);
                    arr_only_sat = arr_only_sat.filter(notMore);
                var arr_only_sun = vals_sun.filter(only_num);
                    arr_only_sun = arr_only_sun.filter(notMore);
                var result_mon = 0;
                var result_tue = 0;
                var result_wed = 0;
                var result_thu = 0;
                var result_fri = 0;
                var result_sat = 0;
                var result_sun = 0;
                //get the sum of all the numbers in the column
                for (var i = 0; i < arr_only_mon.length; i++) {
                    result_mon = result_mon + parseInt(arr_only_mon[i]);
                }
                for (var i = 0; i < arr_only_tue.length; i++) {
                    result_tue = result_tue + parseInt(arr_only_tue[i]);
                }
                for (var i = 0; i < arr_only_wed.length; i++) {
                    result_wed = result_wed + parseInt(arr_only_wed[i]);
                }
                for (var i = 0; i < arr_only_thu.length; i++) {
                    result_thu = result_thu + parseInt(arr_only_thu[i]);
                }
                for (var i = 0; i < arr_only_fri.length; i++) {
                    result_fri = result_fri + parseInt(arr_only_fri[i]);
                }
                for (var i = 0; i < arr_only_sat.length; i++) {
                    result_sat = result_sat + parseInt(arr_only_sat[i]);
                }
                for (var i = 0; i < arr_only_sun.length; i++) {
                    result_sun = result_sun + parseInt(arr_only_sun[i]);
                }
                $('tbody > tr:last-child > td:nth-child(2)').text(result_mon);
                $('tbody > tr:last-child > td:nth-child(3)').text(result_tue);
                $('tbody > tr:last-child > td:nth-child(4)').text(result_wed);
                $('tbody > tr:last-child > td:nth-child(5)').text(result_thu);
                $('tbody > tr:last-child > td:nth-child(6)').text(result_fri);
                $('tbody > tr:last-child > td:nth-child(7)').text(result_sat);
                $('tbody > tr:last-child > td:nth-child(8)').text(result_sun);
            }
            countTotal_column();
            countTotal_str();
        })
    }
    function datepicker() {
            var startDate;
            var endDate;
            var selectCurrentWeek = function() {
                window.setTimeout(function () {
                    $('#weeklyDatePicker').datepicker('widget').find('.ui-datepicker-current-day a').addClass('ui-state-active')
                }, 1);
            };
            $('#weeklyDatePicker').datepicker( {
                showOtherMonths: false,
                selectOtherMonths: false,
                dateFormat : "MM dd D",
                firstDay: 1,
                onSelect: function(dateText, inst) {
                    var date = $(this).datepicker('getDate');
                    startDate = new Date(date.getFullYear(), date.getMonth(), date.getDate() - date.getDay() + 1);
                    endDate = new Date(date.getFullYear(), date.getMonth(), date.getDate() - date.getDay() + 7);
                    var dateFormat = inst.settings.dateFormat || $.datepicker._defaults.dateFormat;
                    $('#weeklyDatePicker').val($.datepicker.formatDate( dateFormat, startDate, inst.settings )
                        + ' - ' + $.datepicker.formatDate( dateFormat, endDate, inst.settings ));
                    selectCurrentWeek();
                },
                beforeShow: function() {
                    selectCurrentWeek();
                },
                beforeShowDay: function(date) {
                    var cssClass = '';
                    if(date >= startDate && date <= endDate)
                        cssClass = 'ui-datepicker-current-day';
                    return [true, cssClass];
                },
                onChangeMonthYear: function(year, month, inst) {
                    selectCurrentWeek();
                }
            }).datepicker('widget').addClass('ui-weekpicker');
            $(document).on("mousemove", ".ui-weekpicker .ui-datepicker-calendar tr", function() { $(this).find('td a').addClass('ui-state-hover'); });
            $(document).on("mousemove", ".ui-weekpicker .ui-datepicker-calendar tr", function() { $(this).find('td a').removeClass('ui-state-hover'); });
    }
    clickVal();
    valid();
    countTotal();
    datepicker();




});